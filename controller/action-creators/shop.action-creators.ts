import { Dispatch } from "redux";
import { ShopTypes } from "../types";


export const setProducts = (products:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:ShopTypes.HANDLE_SET_PRODUCTS,
        products:products
    })
}