import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/global.css'


import store from '../controller/store'
import { Provider } from 'react-redux';

import { useInitialState } from '@/hooks/useInitialState';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../controller/action-creators/shop.action-creators'
import { State } from '@/controller/reducers/root.reducer';

function MyApp(props: AppProps) {

  return (
      <Provider store={store}>
        <Redux {...props} />
      </Provider>
  );
}

function Redux({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const  { products ,cart, summary }  = useSelector((state:State) => state.shop)
  const { appData } = useInitialState()
  const router = useRouter()

  useEffect(()=>{
    shopActions.setProducts(appData)
  },[appData])
  
  return (
    <div className='main-container'>
      {/details/gi.test(router.pathname) 
      ? <Component {...pageProps} redux={{
          products,
          shopActions
        }}  />
      : <Component {...pageProps} redux={{
        products:products,
        cart:cart,
        summary:summary,
        shopActions
    }} />}
    </div>
  )
}

export default MyApp;