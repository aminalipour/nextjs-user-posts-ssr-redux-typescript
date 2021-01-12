export interface User {
    id: string
    firstName: string,
    picture: string,
    email: string,
    lastName: string,
    gender: string,
    registerDate: string,
    location: Location,
}

export interface Post {
    id: string
    text: string,
    image: string,
    likes: string,
    link: string,
    tags: string[],
    publishDate: string,
    owner: User
}

export interface Location {
    street: string,
    city: string,
    state: string,
    country: string,
    timezone: string
}

interface UsersResponse {
    data: User[]
}

const headers: HeadersInit = {
    'app-id': '5ffb9d685d8b42683019f0ae',
};

export async function getUsers(): Promise<User[]> {
    const url = 'https://dummyapi.io/data/api/user?limit=10';
    const opts: RequestInit = {
        method: 'GET',
        headers,
    };
    const res = await fetch(url, opts)
    const response = await res.json()
    const users: User[] = response.data
    return users

}

export async function getUserInfo(userid): Promise<User> {
    const url = `https://dummyapi.io/data/api/user/${userid}`;
    console.log(url)
    const opts: RequestInit = {
        method: 'GET',
        headers,
    };
    const res = await fetch(url, opts)
    const user: User = await res.json()
    return user

}

export async function getUserPosts(userId): Promise<Post[]> {
    const url = `https://dummyapi.io/data/api/user/${userId}/post?limit=10`;
    const opts: RequestInit = {
        method: 'GET',
        headers,
    };
    const res = await fetch(url, opts)
    const response = await res.json()
    const posts: Post[] = response.data
    return posts
}
