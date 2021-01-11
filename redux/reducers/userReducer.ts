import {
    SET_USERS
} from '../actions/types';

export const initialState = {
    users: []
};

export default (state = initialState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case SET_USERS: {
            return Object.assign({}, state, {
                payload,
            });
        }

        // do nothing
        default: {
            return state;
        }
    }
};