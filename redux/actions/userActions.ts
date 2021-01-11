import {SET_USER_INFO, SET_USERS, UserActionTypes} from "./types";
import {getUserInfo, getUsers} from "../../app/api/users";

export const fetchUsers = () => async (dispatch): Promise<UserActionTypes> => {
    const res = await getUsers();
    return  dispatch({
        type: SET_USERS,
        payload: res
    })
}
export const setUserInfo = (userid) => async (dispatch): Promise<UserActionTypes> => {
    const res = await getUserInfo(userid);
    console.log(res)
    return  dispatch({
        type: SET_USER_INFO,
        payload: res
    })
}