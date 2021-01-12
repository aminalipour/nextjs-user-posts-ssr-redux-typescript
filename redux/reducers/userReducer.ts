import {
    SET_USER_INFO, SET_USER_POSTS,
    SET_USERS
} from '../actions/types';
import {Post, User} from "../../app/api/users";

export interface UserSate {
    users: User[],
    userInfo: User,
    posts: Post[]
}
export const initialState = {
    users: [],
    userInfo: {},
    posts: []
};

export default (state = initialState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case SET_USERS:
            return Object.assign({}, state, {
                users: payload,
            })

        case SET_USER_INFO:
            return Object.assign({}, state, {
                userInfo: payload,
            })
        case SET_USER_POSTS:
            return Object.assign({}, state, {
                posts: payload,
            })


        // do nothing
        default: {
            return state;
        }
    }
};
