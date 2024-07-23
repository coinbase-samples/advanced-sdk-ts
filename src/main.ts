import {listAccounts, } from "./rest/accounts";
import {listPortfolio} from "./rest/portfolios";
import {
    getBestBidAsk,
    getProduct,
    getProductBook,
    listProducts,
} from "./rest/products";
import {createOrder} from "./rest/orders";
import {getTransactionSummary} from "./rest/fees";



listAccounts()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error('Unhandled error:', error.message);
    });
//
// listPortfolio()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
//
// getBestBidAsk(["BTC-USD", "ETH-USD"])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
//
// getProductBook("BTC-USD", 5)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
//
// listProducts(undefined, undefined, undefined, ["BTC-USD", "ETH-USD"])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
//
// getProduct("BTC-USD")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
//
// createOrder("12312312312", "BTC-USD", "BUY", {"market_market_ioc":{
//     "base_size": "10"
// }})
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
//
// getTransactionSummary("FUTURE")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });