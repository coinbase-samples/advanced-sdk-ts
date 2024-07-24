# Coinbase Advanced API Typescript SDK

Welcome to the Coinbase Advanced API Typescript SDK. This typescript project was created to allow coders to easily plug into the [Coinbase Advanced API](https://docs.cdp.coinbase.com/advanced-trade/docs/welcome).

___
## Installation

```bash
npm install

tsc
```
___
## Build and Use

To build the project, run the following command:

```bash
tsc
```

*Note: To avoid potential issues, do not forget to build your project again if you make any changes to it.*

After building the project, Javascript counterparts will be created for each Typescript file. The SDK includes a `main.ts` file with a few requests already setup. Run the file like so:
```bash
node dist/main.js
```

If you would like to run another file, for example `test.ts`, then simply replace the `main.js` portion with the respective filename. For example, after building the project, the command for `test.ts` would be:
```bash
node dist/test.js
```
___

## Coinbase Developer Platform (CDP) API Keys

This SDK uses Cloud Developer Platform (CDP) API keys. To use this SDK, you will need to create a CDP API key and secret by following the instructions [here](https://docs.cdp.coinbase.com/advanced-trade/docs/getting-started).
Make sure to save your API key and secret in a safe place. You will not be able to retrieve your secret again.

___

## Authentication

Authentication of CDP API Keys is handled automatically by the SDK when making a REST request.

After creating your CDP API keys, simply create a `.env` file in the root of your repository and add your keys there like so:
```
API_KEY = "Enter API key here"
API_SECRET = "Enter API secret here"
```
Once finished, you are ready to make requests with the SDK.
___

## Locating and Setting Up requests

All REST endpoints are stored in the `src/rest/`. After locating the endpoint you would like to make a request to, import it to `main.ts` (or any other file of choice) like so:

```
import { listAccounts } from "./rest/accounts";
```

Here, the `listAccounts` endpoints is now imported and ready to be called.
___

## Making the request

After the endpoint is imported, to make a request to the `listAccounts` endpoint, you would do it like so:

```
import { listAccounts } from "./rest/accounts";

listAccounts()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error('Unhandled error:', error.message);
    });
```


