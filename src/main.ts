import { RESTClient } from './rest';
import * as dotenv from 'dotenv';

// If storing keys in .env file
dotenv.config();

const client = new RESTClient(process.env.API_KEY, process.env.API_SECRET);

client
  .movePortfolioFunds({funds:{value:"10",currency:"USD"}, sourcePortfolioUuid: "1cdca058-71f2-55e7-af97-e1fa9babb6e5",
  targetPortfolioUuid: "8d165469-71db-4b1a-96c0-acbf93e775e1"})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Unhandled error:', error.message);
  });

// client
//   .listAccounts({ retailPortfolioId: "1cdca058-71f2-55e7-af97-e1fa9babb6e5"})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
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
//   .getProduct('BTC-USD')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
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
//   .createOrder('12312312312', 'BTC-USD', 'BUY', {
//     market_market_ioc: {
//       base_size: '10',
//     },
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Unhandled error:', error.message);
//   });

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
