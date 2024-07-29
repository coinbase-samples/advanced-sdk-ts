import { BASE_URL, ALGORITHM } from "./constants";
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';

const JWT_ISSUER = 'cdp';

export function generateToken(requestMethod: string, requestPath: string): string {
    const uri = `${requestMethod} ${BASE_URL}${requestPath}`;
    const payload = {
        iss: JWT_ISSUER,
        nbf: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 120,
        sub: process.env.API_KEY,
        uri,
    };

    const header = {
        alg: ALGORITHM,
        kid: process.env.API_KEY,
        nonce: crypto.randomBytes(16).toString('hex'),
    };
    return jwt.sign(payload, process.env.API_SECRET as string, { algorithm: "ES256", header });
}
