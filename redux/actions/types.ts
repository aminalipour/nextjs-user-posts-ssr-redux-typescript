import {Post, User} from "../../app/api/users";

export const SET_USERS = 'SET_USERS';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_POSTS = 'SET_USER_POSTS';

interface SetUsersAction {
    type: typeof SET_USERS
    payload: User[]
}
interface SetUserInfoAction {
    type: typeof SET_USER_INFO
    payload: User
}
interface SetUsersPostsAction {
    type: typeof SET_USER_POSTS
    payload: Post[]
}

export type UserActionTypes = SetUsersAction | SetUserInfoAction | SetUsersPostsAction


