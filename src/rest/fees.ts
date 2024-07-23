import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function getTransactionSummary(product_type?: string, contract_expiry_type?: string,
                                        product_venue?: string){
    const endpointPath = `${API_PREFIX}/transaction_summary`
    let queryParams = {
        product_type: product_type,
        contract_expiry_type: contract_expiry_type,
        product_venue: product_venue
    }

    return request("GET", endpointPath, queryParams, undefined)
}