import {combineReducers} from 'redux';
import userReducer, {initialState as userState} from './userReducer';


export const initialState = {
    user: userState,
};

export default combineReducers({
    user: userReducer,
});
