import {Post, User} from "../../app/api/users";

export const SET_USERS = 'SET_USERS';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_POSTS = 'SET_USER_POSTS';
export const SET_MAIN_PAGE = 'SET_MAIN_PAGE';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';
export const SET_MAIN_TITLE = 'SET_MAIN_TITLE';

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

interface SetMainPageAction {
    type: typeof SET_MAIN_PAGE
    payload: boolean
}
interface SetSearchKeywordAction {
    type: typeof SET_SEARCH_KEYWORD
    payload: string
}
interface SetMainTitledAction {
    type: typeof SET_MAIN_TITLE
    payload: string
}

export type UserActionTypes = SetUsersAction | SetUserInfoAction | SetUsersPostsAction
export type MainActionTypes = SetMainPageAction | SetSearchKeywordAction | SetMainTitledAction


