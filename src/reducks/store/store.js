import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { UsersReducer } from '../user/reducers';
import { ProductionsReducer } from '../productions/reducers'

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            productions:ProductionsReducer,
            router:connectRouter(history),
            users:UsersReducer,
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}