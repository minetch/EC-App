import {
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux'
import { ProductsReducer } from '../products/reducers'
import { UsersReducer } from '../user/reducers'

export default function createStore() {
    return reduxCreateStore(

        combineReducers({
            products:ProductsReducer,
            users:UsersReducer,
        })
    )
}