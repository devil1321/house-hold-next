import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';

import { useInitialState } from '@/hooks/useInitialState';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActions from '../controller/action-creators/shop.action-creators'
import { State } from '@/controller/reducers/root.reducer';

function MyApp({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch()
  const shopActions = bindActionCreators(ShopActions,dispatch)
  const { shop } = useSelector((state:State) => state)
  const { appData } = useInitialState()

  useEffect(()=>{
    shopActions.setProducts(appData)
  },[appData])
  
  return (
    <div className='main-container'>
      <Component {...pageProps} redux={{
        products:shop.products,
        shopActions
      }} />
    </div>
  )
}

export default MyApp;