import {SET_USER_INFO, SET_USER_POSTS, SET_USERS, UserActionTypes} from "./types";
import {getUserInfo, getUserPosts, getUsers} from "../../app/api/users";

export const fetchUsers = () => async (dispatch): Promise<UserActionTypes> => {
    const res = await getUsers();
    return  dispatch({
        type: SET_USERS,
        payload: res
    })
}
export const setUserInfo = (userid) => async (dispatch): Promise<UserActionTypes> => {
    const res = await getUserInfo(userid);
    return  dispatch({
        type: SET_USER_INFO,
        payload: res
    })
}
export const setUserPosts = (userid) => async (dispatch): Promise<UserActionTypes> => {
    const res = await getUserPosts(userid);
    return  dispatch({
        type: SET_USER_POSTS,
        payload: res
    })
}
