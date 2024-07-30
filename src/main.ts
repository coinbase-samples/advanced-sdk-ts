import {
    getAccount,
    listAccounts,
    listOrders,
    listPortfolio,
    getBestBidAsk,
    getProductBook,
    listProducts,
    getProduct,
    createOrder,
    getTransactionSummary,
    getPublicProduct,
} from "./rest";

// listAccounts()
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// getAccount("6b0b6403-4c03-5f36-a4c6-7ad10ad4a553")
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

// listPortfolio()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//    });

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

// listOrders()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });

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

// getPublicProduct('BTC-USD')
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.error('Unhandled error:', error.message);
//     });
