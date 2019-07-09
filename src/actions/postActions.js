import {FETCH_POSTS, NEW_POST } from './types';

// ES6 syntax
export const fetchPosts = () => dispatch => {
    console.log("Dispatching fetch posts action");
    // returns a promise, map to json       
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    ); // dispatch the data(posts) to the reducer
};