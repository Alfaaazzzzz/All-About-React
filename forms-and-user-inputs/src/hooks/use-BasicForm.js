
//using useReducer

import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, actions) => {
    if (actions.type==='CHANGEHANDLER'){
        return{value:actions.value, isTouched:state.isTouched}
    }
    if(actions.type==='BLURHANDLER'){
        return{value:state.value,isTouched:actions.value}
    }
    if(actions.type==='RESET'){
        return{value:'',isTouched:false}
    }
  return initialInputState;
};

const useBasicForm = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

  const [inputState,dispatchState] = useReducer(inputStateReducer,initialInputState);

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    // setEnteredValue(event.target.value);
    dispatchState({type:'CHANGEHANDLER', value:event.target.value})
  };
  const valueBlurHandler = () => {
    // setIsTouched(true);
    dispatchState({type:'BLURHANDLER', value:true})
  };

  const reset = () => {
    // setEnteredValue("");
    // setIsTouched(false);
    dispatchState({type:'RESET'})
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useBasicForm;
