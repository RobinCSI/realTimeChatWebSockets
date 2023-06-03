import {createSlice, current} from '@reduxjs/toolkit'

const initialState={
    value:[]
}

export const chatsSlice=createSlice({
    name:'chats', 
    initialState,
    reducers: {
        addUser: (state, action)=>{
            state.value.push(action.payload)
            console.log(current(state))
        }
    }
})

export const {addUser}=chatsSlice.actions
export default chatsSlice.reducer