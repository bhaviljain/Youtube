import { createSlice } from "@reduxjs/toolkit";
import { offSet_live_Chat } from "../Contants/utils";

const ChatSlice = createSlice({
    name:"message",
    initialState:{
    messages:[],
    },
    reducers:{
     addMessage : (state, action) =>{
        state.messages.splice(offSet_live_Chat,1)
        state.messages.unshift(action.payload)
     }
    }
})
export const {addMessage} = ChatSlice.actions
export default ChatSlice.reducer