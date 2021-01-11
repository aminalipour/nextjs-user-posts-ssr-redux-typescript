import {combineReducers} from 'redux';
import userReducer, {initialState as userState} from './userReducer';




export default combineReducers({
    user:userReducer
})