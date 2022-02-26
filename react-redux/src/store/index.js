import {createStore} from 'redux'

const initaialState= {counter:0, showCounter:true}

const counterReducer=(state=initaialState,action)=>{
    if(action.type==='INC'){
        return {
            counter:state.counter + 1,
            showCounter:state.showCounter
        }
    }
    if(action.type==='INC5'){
        return{
            counter:state.counter + action.payLoad,
            showCounter:state.showCounter
        }
    }
    if(action.type==='DEC'){
        return {
            counter:state.counter - 1,
            showCounter:state.showCounter
        }
    }
    if(action.type==='TOGGLE'){
        return{
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
    

    return state;
}

const store= createStore(counterReducer)

export default store

