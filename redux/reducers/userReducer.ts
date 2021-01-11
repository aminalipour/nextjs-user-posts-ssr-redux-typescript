import {
    SET_USER_INFO,
    SET_USERS
} from '../actions/types';
import {User} from "../../app/api/users";

export interface UserSate {
    users: User[],
    userInfo: User
}
export const initialState = {
    users: [],
    userInfo: {},
};

export default (state = initialState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case SET_USERS: {
            return Object.assign({}, state, {
                users: payload,
            })
        }
        case SET_USER_INFO: {
            return Object.assign({}, state, {
                userInfo: payload,
            })
        }

        // do nothing
        default: {
            return state;
        }
    }
};