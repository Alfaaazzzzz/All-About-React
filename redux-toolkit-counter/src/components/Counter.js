import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch()  // it will return a function that we can use to dispatch function by defining he type
  const counter=useSelector(state=>state.counter.counter)
  const showCounter= useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.TOGGLE())
  };

  const IncrementHandler=()=>{
    dispatch(counterActions.INC())
  }
  const DecrementHandler=()=>{
    dispatch(counterActions.DEC())
  }
  const IncrementHandlerByFive=()=>{
    dispatch(counterActions.INC5(5))
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
