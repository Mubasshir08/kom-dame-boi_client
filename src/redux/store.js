import {configureStore} from '@reduxjs/toolkit';
import postReducer from './PostSlice';
import themeReducer from './ThemeSlice';
const store = configureStore({
    reducer: {
        post: postReducer,
        theme : themeReducer  
    }
})
export default store;