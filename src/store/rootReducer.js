import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterReducer';
import blogReducer from './blog/blogReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    blogs: blogReducer,
});

export default rootReducer;