import {FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], // List of posts
    item: {},  // A single post
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            console.log('Reducer is working for fetch_posts');
            return {
                ...state,
                items: action.payload // The data from the action
            }
        default:
            return state;
    }
}