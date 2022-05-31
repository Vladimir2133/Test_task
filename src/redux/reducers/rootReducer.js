import { combineReducers } from "redux";
import {users} from './users'
import {positions} from './positions'

const rootReducer = combineReducers({
    users,
    positions
})

export default rootReducer