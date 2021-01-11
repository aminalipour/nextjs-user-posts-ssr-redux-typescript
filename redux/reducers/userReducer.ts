import {
    SET_USERS
} from '../actions/types';
import {User} from "../../app/api/users";

export interface UserSate {
    users: User[]
}
export const initialState = {
    users: [],
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

        // do nothing
        default: {
            return state;
        }
    }
};