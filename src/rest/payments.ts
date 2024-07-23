import {API_PREFIX} from "../constants";
import {request} from "./rest-base";

export function listPaymentMethods(){
    const endpoint = `${API_PREFIX}/payment_methods`

    return request("GET", endpoint, undefined, undefined)
}

export function getPaymentMethod(payment_method_id: string){
    const endpoint = `${API_PREFIX}/payment_methods/${payment_method_id}`

    return request("GET", endpoint, undefined, undefined)
}