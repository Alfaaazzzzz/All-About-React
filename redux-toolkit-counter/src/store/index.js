// import {createStore} from 'redux'

import {configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// const counterReducer=(state=initialState,action)=>{
//     if(action.type==='INC'){
//         return {
//             counter:state.counter + 1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='INC5'){
//         return{
//             counter:state.counter + action.payLoad,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='DEC'){
//         return {
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='TOGGLE'){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }

//     return state;
// }

//getting action identifiers
//it will automatically create a unique action object
//{type:'some unique auto generated value'}

//creating store
//we use configureStore if we have multiple reducers to work on, we can also use if we have single reducer as well. new feature from redux-toolkit

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
