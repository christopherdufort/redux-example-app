// Root Reducer
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer  //This is the post reducer used for posts
});