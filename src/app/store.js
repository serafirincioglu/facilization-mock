import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice.js';


export default configureStore({
    //Reducer is the user
    reducer: {
        user: userReducer
    },
})