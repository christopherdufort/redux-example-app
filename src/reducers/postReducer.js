import {FETCH_POSTS, NEW_POST } from '../actions/types';

// Items in our store
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
            };
        case NEW_POST:
            console.log('Reducer is working for new_post');
            // Normally here we would fetch all the items from the database (including the newly added one)
            return {
                ...state,
                item: action.payload // The data from the action
            };
        default:
            return state;
    }
}