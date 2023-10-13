import { ShopTypes } from "../types"
import { Action } from "../actions/shop.actions";


const initData:any = {
    products:[],
    cart:[],
    summary:0,
}

export default (state = initData,action:Action) =>{
    switch(action.type){
        case ShopTypes.HANDLE_SET_PRODUCTS:
            return {
                ...state,
                products:action.products,
            }
        case ShopTypes.HANDLE_ADD_TO_CART:
            return {
                ...state,
                cart:action.cart
            }
        case ShopTypes.HANDLE_REMOVE_FROM_CART:
            return {
                ...state,
                cart:action.cart
            }
        case ShopTypes.HANDLE_CHANGE_CART_QUANTITY:
            return {
                ...state,
                cart:action.cart
            }
        case ShopTypes.HANDLE_SUMMARY:
            return {
                ...state,
                summary:action.summary
            }
        default:
            return {
                ...state
            }
    }
}