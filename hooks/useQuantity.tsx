import React, { useEffect, useState } from 'react'
import { State } from '@/controller/reducers/root.reducer'
import { useSelector,useDispatch } from 'react-redux'
import * as ShopActions from '@/controller/action-creators/shop.action-creators'
import { bindActionCreators } from 'redux'

const useQuantity = (id:number,update:boolean) => {
  const [quantity,setQuantity] = useState<number>(0)
  const { cart } = useSelector((state:State) => state.shop)
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const handleQuantity = () =>{
    const item = cart.find((i:any) => i.id === id)
    shopActions.handleSummary(cart)
    if(item?.quantity < 1){
        setQuantity(0)
    }else{
        setQuantity(item?.quantity)
    }
  }

  useEffect(()=>{
    handleQuantity()
  },[update])

  return [quantity,setQuantity]
}

export default useQuantity
