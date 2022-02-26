const redux = require("redux");

//reducer function that will be used to manipulate the state of the store
const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type==='INC'){
        return {
            counter: state.counter + 1,
          };
    }
    if(action.type==='DEC'){
        return {
            counter: state.counter - 1,
          };
    }
    return state;
};

//creating the store and a instance of that store
const store = redux.createStore(counterReducer);


//creating a subscriber
const counterSubscriber = () => {
  //getState is a method which is available on the store created with createStore
  //It will give us the latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

//by defining this we are telling redux to execute this function whenever our state changes
//subscribe method expects a function which Redux will then execute for us whenever the data and the store changed.
//So here we now pass the counter subscriber to subscribe.
store.subscribe(counterSubscriber);

//dispatch is a method which dispatches an action 
//this dispatch method will re-run the reducer function
store.dispatch({type:'INC'})
store.dispatch({type:'DEC'})