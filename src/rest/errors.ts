import { Response } from 'node-fetch';

class CoinbaseClientError extends Error {
  statusCode: number;
  response: Response;

  constructor(message: string, statusCode: number, response: Response) {
    super(message);
    this.name = 'CoinbaseClientError';
    this.statusCode = statusCode;
    this.response = response;
  }
}

class CoinbaseServerError extends Error {
  statusCode: number;
  response: Response;

  constructor(message: string, statusCode: number, response: Response) {
    super(message);
    this.name = 'CoinbaseServerError';
    this.statusCode = statusCode;
    this.response = response;
  }
}

export function handleException(
  response: Response,
  responseText: string,
  reason: string
) {
  let message: string | undefined;

  if (400 <= response.status && response.status <= 499) {
    if (
      response.status == 403 &&
      responseText.includes('"error_details":"Missing required scopes"')
    ) {
      message = `${response.status} Coinbase Client Error: Missing Required Scopes. Please verify your API keys include the necessary permissions.`;
    } else
      message = `${response.status} Coinbase Client Error: ${reason} ${responseText}`;

    throw new CoinbaseClientError(message, response.status, response);
  } else if (500 <= response.status && response.status <= 599) {
    message = `${response.status} Coinbase Server Error: ${reason} ${responseText}`;

    throw new CoinbaseServerError(message, response.status, response);
  }
}
