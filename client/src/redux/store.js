import {configureStore} from '@reduxjs/toolkit'
import chatsReducer from './chatsSlice'
import usersReducer from './usersSlice'


export const store=configureStore({
    reducer:{
        users:usersReducer,
        chats:chatsReducer
    }
})