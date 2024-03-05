import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Slice/UserSlice';
import themeReducer from '../Slice/ThemeSlice'

export const store = configureStore({
    reducer:{
        user:userReducer,
        theme:themeReducer
    }
})