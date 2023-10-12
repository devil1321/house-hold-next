import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css'

import axios from 'axios'
import store from '../controller/store'
import { Provider } from 'react-redux';
import { ShopTypes } from '@/controller/types';

function MyApp({ Component, pageProps }: AppProps) {

  const { products } = store.getState().shop
  const [isLoad,setIsLoad] = useState<boolean>(false)

  const handleSetStoreProducts = () =>{
    if(!isLoad){
      store.dispatch({
        type:ShopTypes.HANDLE_SET_PRODUCTS,
        products:pageProps.response
      })
      setIsLoad(true)
    }
  }

  useEffect(()=>{
    handleSetStoreProducts()
  },[isLoad])
  
  return (
    <div className='main-container'>
      <Provider store={store}>
        <Component {...pageProps} reduxProducts={products} />
      </Provider>
    </div>
  );
}

MyApp.getInitialProps = async (context:any) => {
  
  // You can fetch data and add it to pageProps.
  const res = await axios.get('http://localhost:3000/assets/context.json')

  return {
    pageProps: {
      response:res.data,
    },
  };
};


export default MyApp;