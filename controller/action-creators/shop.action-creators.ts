import { Dispatch } from "redux";
import { ShopTypes } from "../types";


export const handleSetProducts = (products:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_SET_PRODUCTS,
        products:products
    })
}
export const handleSetCart = (cart:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_SET_CART,
        cart:cart
    })
}
export const handleAddProduct = (id:number,cart:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_ADD_TO_CART,
        cart:cart
    })
}
export const handleCartQuantity = (id:number,cart:any,quantity:number) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_CHANGE_CART_QUANTITY,
        cart:cart
    })
}
export const handleRemove = (id:number,cart:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_REMOVE_FROM_CART,
        cart:cart
    })
}
export const handleSummary = (id:number,cart:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_SUMMARY,
        cart:cart
    })
}