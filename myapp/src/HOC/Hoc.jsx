import React from 'react'
import { useState } from 'react';

const Hoc = (WrappedComponent) => {
    return function A(){
      const [money,setMoney]=useState(10);
      const increase=()=>{
          setMoney(money*2);
      }
        return (
          <div>
            <WrappedComponent money={money} increase={increase}/>
          </div>
        )
    }
}

export default Hoc;
