import { createSlice } from "@reduxjs/toolkit";

const initialCartToggleState={showCart:false, notification:null}

const cartToggleSlice= createSlice({
    name:'cartToggle',
    initialState:initialCartToggleState,
    reducers:{
        SHOW(state){
            state.showCart= !state.showCart
        },
        ShowNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message,
            }
        }
    }
})

export const ToggleActions= cartToggleSlice.actions;
export default cartToggleSlice