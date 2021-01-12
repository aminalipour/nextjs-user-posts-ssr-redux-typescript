import {
    MainActionTypes,
    SET_MAIN_PAGE,
    SET_SEARCH_KEYWORD,
    SET_MAIN_TITLE,
} from "./types";

export const setMainPage = (val) => async (dispatch): Promise<MainActionTypes> => {
    return  dispatch({
        type: SET_MAIN_PAGE,
        payload: val
    })
}
export const setSearchKeyword = (keyword) => async (dispatch): Promise<MainActionTypes> => {
    return  dispatch({
        type: SET_SEARCH_KEYWORD,
        payload: keyword
    })
}

export const setMainTitle = (title) => async (dispatch): Promise<MainActionTypes> => {
    return  dispatch({
        type: SET_MAIN_TITLE,
        payload: title
    })
}
