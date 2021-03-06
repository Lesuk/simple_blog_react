import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const LOCAL_ROOT_URL = 'http://localhost:4000/api';
const API_KEY = '?key=lesuk';

export function fetchPosts() {
  const request = axios.get(`${LOCAL_ROOT_URL}/posts`);
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${LOCAL_ROOT_URL}/posts`, {post: props});
  // const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function updatePost(props, id) {
  const request = axios.put(`${LOCAL_ROOT_URL}/posts/${id}`, {post: props});

  return {
    type: UPDATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${LOCAL_ROOT_URL}/posts/${id}`);
  // const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${LOCAL_ROOT_URL}/posts/${id}`);
  // const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
