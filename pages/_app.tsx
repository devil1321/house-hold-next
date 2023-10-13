import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css'

import axios from 'axios'
import store from '../controller/store'
import { Provider } from 'react-redux';
import { ShopTypes } from '@/controller/types';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../controller/action-creators/shop.action-creators'
import { useInitialState } from '@/hooks/useInitialState';

function MyApp({ Component, pageProps }: AppProps) {

  const dispatch = store.dispatch
  const shopActions = bindActionCreators(ShopActions,dispatch)

  const [products,setProducts] = useState<any[]>([])
  const [reduxState,setReduxState] = useState<any[]>([])
  const { appData } = useInitialState()

  const handleSetStoreProducts = () =>{
    if(products?.length > 0){
      dispatch({
        type:ShopTypes.HANDLE_SET_PRODUCTS,
        products:products
      })
    }
    setProducts(appData)
  }

  useEffect(()=>{
    handleSetStoreProducts()
    setReduxState(store.getState().shop.products)
  },[products,appData])
  
  return (
    <div className='main-container'>
      <Provider store={store}>
        <Component {...pageProps} redux={{
          products:reduxState,
          shopActions
        }} />
      </Provider>
    </div>
  );
}

export default MyApp;