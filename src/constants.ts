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
export const BASE_URL = 'api.coinbase.com';
export const API_PREFIX = '/api/v3/brokerage/';
export const ALGORITHM_ECDSA = 'ES256';
export const ALGORITHM_ED25519 = 'EdDSA';
export const VERSION = '0.3.0';
export const USER_AGENT = `coinbase-advanced-ts/${VERSION}`;
export const JWT_ISSUER = 'cdp';
export const API_BASE_PATH = 'https://' + BASE_URL + API_PREFIX;
