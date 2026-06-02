/**
 * Copyright 2024-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ALGORITHM_ECDSA, ALGORITHM_ED25519, JWT_ISSUER } from '../../constants';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

interface LoadedKey {
  key: crypto.KeyObject;
  algorithm: string;
}

/**
 * Supported:
 *   - ECDSA P-256 PEM (SEC1 or PKCS8)              -> ES256
 *   - Ed25519 PEM (PKCS8)                          -> EdDSA
 *   - Ed25519 raw base64, 64 bytes (seed + public) -> EdDSA
 */
function loadPrivateKey(secret: string): LoadedKey {
  if (secret.trimStart().startsWith('-----BEGIN')) {
    const key = crypto.createPrivateKey(secret);
    return { key, algorithm: algorithmForKey(key) };
  }

  const raw = Buffer.from(secret.replace(/\s/g, ''), 'base64');
  if (raw.length !== 64) {
    throw new Error(
      'Private key is neither PEM nor a valid 64-byte base64 Ed25519 key ' +
        `(got ${raw.length} bytes). `
      );
  }
  const key = crypto.createPrivateKey({
    format: 'jwk',
    key: {
      kty: 'OKP',
      crv: 'Ed25519',
      d: raw.subarray(0, 32).toString('base64url'),
      x: raw.subarray(32).toString('base64url'),
    },
  });
  return { key, algorithm: ALGORITHM_ED25519 };
}

function algorithmForKey(key: crypto.KeyObject): string {
  switch (key.asymmetricKeyType) {
    case 'ed25519':
      return ALGORITHM_ED25519;
    case 'ec':
      return ALGORITHM_ECDSA;
    default:
      throw new Error(
        `Unsupported private key type: ${key.asymmetricKeyType ?? 'unknown'}. ` +
          'Expected an ECDSA (P-256) or Ed25519 key.'
      );
  }
}

function buildJwt(loaded: LoadedKey, accessKey: string, uri: string): string {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: JWT_ISSUER,
    nbf: now,
    exp: now + 120,
    sub: accessKey,
    uri,
  };

  const header = {
    alg: loaded.algorithm,
    kid: accessKey,
    nonce: crypto.randomBytes(16).toString('hex'),
  };

  if (loaded.algorithm === ALGORITHM_ED25519) {
    const encode = (obj: unknown) =>
      Buffer.from(JSON.stringify(obj)).toString('base64url');
    const signingInput = `${encode(header)}.${encode(payload)}`;
    const data = new Uint8Array(Buffer.from(signingInput));
    const signature = crypto.sign(null, data, loaded.key);
    return `${signingInput}.${signature.toString('base64url')}`;
  }

  return jwt.sign(payload, loaded.key, {
    algorithm: loaded.algorithm as jwt.Algorithm,
    header,
  });
}

export class CoinbaseAdvTradeCredentials {
  private accessKey: string | undefined;
  private secretKey: string | undefined;

  constructor(key?: string, secret?: string) {
    if (!key || !secret) {
      console.log('Could not authenticate. Only public endpoints accessible.');
    }
    this.accessKey = key;
    this.secretKey = secret;
  }

  generateAuthHeaders(
    requestMethod: string,
    uri: string
  ): Record<string, string> {
    if (!this.secretKey || !this.accessKey) {
      return {};
    }

    const loaded = loadPrivateKey(this.secretKey);

    // Drop protocol and query parameters
    const jwtUri = `${requestMethod} ${
      uri.replace('https://', '').replace('http://', '').split('?')[0]
    }`;

    return {
      Authorization: `Bearer ${buildJwt(loaded, this.accessKey, jwtUri)}`,
    };
  }
}
