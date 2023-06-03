import {createSlice, current} from '@reduxjs/toolkit'

const initialState={
    value:[]
}

export const usersSlice=createSlice({
    name:'users', 
    initialState,
    reducers: {
        addUser: (state, action)=>{
            state.value.push(action.payload)
            console.log(current(state))
        }
    }
})

export const {addUser}=usersSlice.actions
export default usersSlice.reducer