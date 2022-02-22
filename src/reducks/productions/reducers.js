import * as Actions from './actions' //import all modules
import initialState from '../store/initialstate'

export const ProductionsReducer = (state = initialState.productions, action) => {
    switch (action.type) {
        default:
            return state
    }
}
