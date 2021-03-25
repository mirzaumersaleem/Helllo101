import {ADD_TO_CART} from "../constant";
export const addToCart = (data) =>{
    return {
        data : data ,
        type : ADD_TO_CART
    }
}

// export const removeToCart = (data) =>{
//     return {
//         data : data ,
//         type : "REMOVE_TO_CART"
//     }
// }