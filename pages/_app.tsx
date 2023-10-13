import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css'

import axios from 'axios'
import store from '../controller/store'
import { Provider } from 'react-redux';
import { ShopTypes } from '@/controller/types';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../controller/action-creators/shop.action-creators'

function MyApp({ Component, pageProps }: AppProps) {

  const dispatch = store.dispatch
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [products,setProducts] = useState<any>([])

  const handleSetStoreProducts = () =>{
    if(!isLoad){
      dispatch({
        type:ShopTypes.HANDLE_SET_PRODUCTS,
        products:pageProps.response
      })
      setIsLoad(true)
    }
  }

  const handleInitialState = async () => {
    const res = await axios.get('http://localhost:3000/assets/context.json')
    setProducts([...res.data])
  }
 

  useEffect(()=>{
    handleSetStoreProducts()
    handleInitialState()
  },[isLoad])
  
  return (
    <div className='main-container'>
      <Provider store={store}>
        <Component {...pageProps} redux={{
          products,
          shopActions
        }} />
      </Provider>
    </div>
  );
}

export default MyApp;