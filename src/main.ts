import { RESTClient } from "./rest";
import * as dotenv from "dotenv";

dotenv.config();
const client = new RESTClient();

// client.listAccounts()
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.getAccount("6b0b6403-4c03-5f36-a4c6-7ad10ad4a553")
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.listPortfolio()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//    });

// client.getBestBidAsk(["BTC-USD", "ETH-USD"])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.getProductBook("BTC-USD", 5)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.listProducts(undefined, undefined, undefined, ["BTC-USD", "ETH-USD"])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.getProduct("BTC-USD")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.listOrders()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.createOrder("12312312312", "BTC-USD", "BUY", {"market_market_ioc":{
//     "base_size": "10"
// }})
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.getTransactionSummary("FUTURE")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// client.getPublicProduct('BTC-USD')
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
