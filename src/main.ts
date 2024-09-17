// import { RESTClient } from './src/rest';

// import { OrderSide } from './src/rest/types/common-types';
// import {
//   GetAccountResponse,
//   ListAccountsRequest,
//   ListAccountsResponse,
// } from './rest/types/accounts-types';
// import { GetPublicProductRequest } from './rest/types/public-types';
//
// // If storing keys in .env file

//
// const client = new RESTClient('', '');
//
// client
//   .getServerTime()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });
import * as dotenv from 'dotenv';
import { RESTClient } from './rest';
import { OrderSide } from './rest/types/common-types';
import {
  CreateOrderRequest,
  CreateOrderResponse,
} from './rest/types/orders-types';

dotenv.config();
// const client = new RESTClient(process.env.API_KEY, process.env.API_SECRET);
const client = new RESTClient(process.env.API_KEY, process.env.API_SECRET);

// client
//   .createOrder({
//     clientOrderId: '000000aaaa01',
//     productId: 'BTC-USD',
//     side: OrderSide.SELL,
//     orderConfiguration: {
//       market_market_ioc: {
//         base_size: '0.00017',
//       },
//     },
//   } as CreateOrderRequest)
//   .then((result) => {
//     console.log(result as CreateOrderResponse);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

client
  .getPublicProduct({ productId: 'BTC-USD' })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

// client
//     .listAccounts({} as ListAccountsRequest)
//     .then((result) => {
//         console.log(result as ListAccountsResponse);
//     })
//     .catch((error) =>  {
//         console.error(error.message);
//     });

// client
//   .listAccounts({})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// client
//   .listPortfolios()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

// client
//   .getBestBidAsk(['BTC-USD', 'ETH-USD'])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

// client
//   .getProductBook('BTC-USD', 5)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

// client
//   .listProducts(undefined, undefined, undefined, ['BTC-USD', 'ETH-USD'])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

// client
//   .getProduct({productId: "BTC-USD"})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// client
//   .listOrders()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

// client
//     .createOrder({
//         clientOrderId: "00a00a0001",
//         productId: "BTC-USD",
//         side: OrderSide.BUY,
//         orderConfiguration:{
//             market_market_ioc: {
//                 quote_size: "5"
//             }
//         }
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });

// client
//   .getTransactionSummary('FUTURE')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

// client
//   .getPublicProduct('BTC-USD')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });
