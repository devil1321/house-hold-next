import React from 'react'
import { createStore , applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'


const middleware = [thunk]

const initState  = {}

const store = createStore(
        rootReducer,
        initState,
        compose(
            applyMiddleware(...middleware),
        )
    )

export default store