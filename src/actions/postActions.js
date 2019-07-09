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

export const createPost = (postData) => dispatch => {
    console.log("Dispatching create post action");
    // returns a promise, map to json 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post =>         
        dispatch({
            type: NEW_POST,
            payload: post
        })
    ); // dispatch the data(post) to the reducer
};
