import React from 'react'
import { useState,useEffect} from 'react';

const FunctionLifecycle = () => {
    const [count,setCount]=useState(10);
    useEffect(()=>{
        console.log("Functional Component Did Mounting");
     });
  return (
    <>
       <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={()=>count>0?setCount(count-1):setCount(0)}>Decrement</button>
       <p>{count}</p>     
    </>
  )
}

export default FunctionLifecycle
