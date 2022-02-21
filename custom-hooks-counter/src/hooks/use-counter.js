import React,{useState,useEffect} from 'react'

const useCounter=(sign='+')=>{
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(sign==='+'){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  },[sign]);

  return counter
}

export default useCounter