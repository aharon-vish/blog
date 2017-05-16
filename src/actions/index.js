import axios from 'axios';
import {FETCH_POSTS,CREATE_POST }from '../type';

const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=KOKORIKO12345';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type:FETCH_POSTS,
        payload: request
    }
}

export function createPost(values,callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());
    return {
        type:CREATE_POST,
        payload: request
    }
}

