import * as Actions from './actions' //import all modules
import initialState from '../store/initialstate'

export const UsersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state, //スプレッド構文
                ...action.payload
            }
        default:
            return state
    }
}
