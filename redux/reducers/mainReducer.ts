import {
    SET_MAIN_PAGE, SET_MAIN_TITLE, SET_SEARCH_KEYWORD,
} from '../actions/types';

export interface UserSate {
    mainPage: boolean,
    searchKeyword: string,
    title: string
}
export const initialState = {
    mainPage: true,
    searchKeyword: '',
    title: 'All Users'
};

export default (state = initialState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        case SET_MAIN_PAGE:
            return Object.assign({}, state, {
                mainPage: payload,
            })

        case SET_SEARCH_KEYWORD:
            return Object.assign({}, state, {
                searchKeyword: payload,
            })
        case SET_MAIN_TITLE:
            return Object.assign({}, state, {
                title: payload,
            })


        // do nothing
        default: {
            return state;
        }
    }
};
