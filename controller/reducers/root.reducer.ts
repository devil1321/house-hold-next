import { combineReducers } from 'redux'
import shopReducer from './shop.reducer'

const reducers = combineReducers({
    shop:shopReducer
})

export default reducers

export type State = ReturnType<typeof reducers>