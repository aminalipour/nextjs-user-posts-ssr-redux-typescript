import {User} from "../../app/api/users";

export const SET_USERS = 'SET_USERS';
export const SET_USER_INFO = 'SET_USER_INFO';

interface SetUsersAction {
    type: typeof SET_USERS
    payload: User[]
}
interface SetUserInfoAction {
    type: typeof SET_USER_INFO
    payload: User
}

export type UserActionTypes = SetUsersAction | SetUserInfoAction


