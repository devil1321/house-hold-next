import React, { useEffect, useState } from 'react'
import { State } from '@/controller/reducers/root.reducer'
import { useSelector,useDispatch } from 'react-redux'
import * as ShopActions from '@/controller/action-creators/shop.action-creators'
import { bindActionCreators } from 'redux'

const useQuantity = (id:number) => {
  const [quantity,setQuantity] = useState<number>()
  const { cart, products } = useSelector((state:State) => state.shop)
  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const handleQuantity = () =>{
    const item = products.find((i:any) => i.id === id)
    // shopActions.handleSummary(id,cart)
    if(item?.quantity < 1){
        setQuantity(0)
        shopActions.handleRemove(id,cart)
    }else{
        setQuantity(item?.quantity)
    }
  }

  useEffect(()=>{
    handleQuantity()
  },[products])

  return [quantity,setQuantity]
}

export default useQuantity
