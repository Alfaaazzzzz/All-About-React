import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch()  // it will return a function that we can use to dispatch function by defining he type
  const counter=useSelector(state=>state.counter)
  const showCounter= useSelector(state=>state.showCounter)
  const toggleCounterHandler = () => {
    dispatch({type:'TOGGLE'})
  };

  const IncrementHandler=()=>{
    dispatch({type:'INC'})
  }
  const DecrementHandler=()=>{
    dispatch({type:'DEC'})
  }
  const IncrementHandlerByFive=()=>{
    dispatch({type:'INC5', payLoad:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>+</button>
        <button onClick={IncrementHandlerByFive}>+5</button>
        <button onClick={DecrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
