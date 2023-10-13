import React, { useEffect, useState } from 'react';
import Redux from './_redux'
import { AppProps } from 'next/app';
import '../styles/global.css'

import store from '../controller/store'
import { Provider } from 'react-redux';


function MyApp(props: AppProps) {

  return (
      <Provider store={store}>
        <Redux {...props} />
      </Provider>
  );
}

export default MyApp;