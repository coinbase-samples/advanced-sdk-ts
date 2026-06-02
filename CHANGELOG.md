# Changelog

## [0.3.0] - 2026-JUN-02

### Added

- Ed25519 API key support. Key type is auto-detected: Ed25519 keys are signed with EdDSA, while ECDSA (P-256) keys continue to sign with ES256 as before. Ed25519 keys are accepted as PKCS8 PEM or 64-byte raw base64.

## [0.1.0] - 2024-SEP-06

### Added

- Support for all Coinbase Advanced API REST endpoints via central client
- Custom Request and Response objects for endpoints
- Custom error types
