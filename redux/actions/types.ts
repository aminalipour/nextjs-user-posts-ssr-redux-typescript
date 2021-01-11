import {User} from "../../app/api/users";

export const SET_USERS = 'SET_USERS';
interface SetUserAction {
    type: typeof SET_USERS
    payload: User[]
}
export type UserActionTypes = SetUserAction


