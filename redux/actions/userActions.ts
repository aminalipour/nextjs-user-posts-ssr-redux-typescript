import {SET_USERS, UserActionTypes} from "./types";
import {getUsers} from "../../app/api/users";

export const fetchUsers = () => async (dispatch): Promise<UserActionTypes> => {
    const res = await getUsers();
    return  dispatch({
        type: SET_USERS,
        payload: res
    })
}