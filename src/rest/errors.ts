import { Response } from 'node-fetch';

class CoinbaseError extends Error {
  statusCode: number;
  response: Response;

  constructor(message: string, statusCode: number, response: Response) {
    super(message);
    this.name = 'CoinbaseError';
    this.statusCode = statusCode;
    this.response = response;
  }
}

export function handleException(
  response: Response,
  responseJson: object,
  reason: string
) {
  let message: string | undefined;

  if (
    (400 <= response.status && response.status <= 499) ||
    (500 <= response.status && response.status <= 599)
  ) {
    let missingRequiredScopes = false;
    const responseText = JSON.stringify(responseJson, (key, value) => {
      if (
        key === 'error_details' &&
        typeof value === 'string' &&
        value.includes('Missing required scopes')
      ) {
        missingRequiredScopes = true;
      }
    });
    if (response.status == 403 && missingRequiredScopes) {
      message = `${response.status} Coinbase Error: Missing Required Scopes. Please verify your API keys include the necessary permissions.`;
    } else
      message = `${response.status} Coinbase Error: ${reason} ${responseText}`;

    throw new CoinbaseError(message, response.status, response);
  }
}
