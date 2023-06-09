import {createSlice, current} from '@reduxjs/toolkit'

const initialState={
    value:[]
}

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.value.push(action.payload);
      console.log(current(state));
    },
  },
});

export const { addChat } = chatsSlice.actions;
export default chatsSlice.reducer