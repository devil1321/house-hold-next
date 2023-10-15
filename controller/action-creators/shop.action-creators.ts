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
export const handleAddProduct = (id:number,cart:any,products:any) => (dispatch:Dispatch) =>{
    let tmpCart = cart
    const item = products.find((i:any) => i.id === id)
    item.inCart = true
    tmpCart = [...cart,item]
    dispatch({
        type:ShopTypes.HANDLE_ADD_TO_CART,
        cart:tmpCart
    })
}
export const handleCartQuantity = (id:number,cart:any,products:any,quantity:number) => (dispatch:Dispatch) =>{
    let tmpCart = cart
    const item = tmpCart.find((i:any) => i.id === id)
    item.quantity = quantity
    if(quantity === 0){
        console.log(quantity)
        tmpCart = tmpCart.filter((i:any) => i.id !== id)
        const product = products.find((i:any) => i.id === id)
        product.inCart = false
    }
    dispatch({
        type:ShopTypes.HANDLE_CHANGE_CART_QUANTITY,
        cart:tmpCart
    })
}
export const handleRemove = (id:number,cart:any,products:any) => (dispatch:Dispatch) =>{
    let tmpCart = cart
    tmpCart = tmpCart.filter((i:any) => i.id !== id)
    const product = products.find((p:any)=> p.id === id)
    product.inCart = false
    handleSummary(tmpCart)
    dispatch({
        type:ShopTypes.HANDLE_REMOVE_FROM_CART,
        cart:tmpCart
    })
}
export const handleSummary = (cart:any) => (dispatch:Dispatch) =>{
    let summary = 0
    cart.forEach((i:any) => {
        summary += i.price * i.quantity
    });
    dispatch({
        type:ShopTypes.HANDLE_SUMMARY,
        summary:summary
    })
}