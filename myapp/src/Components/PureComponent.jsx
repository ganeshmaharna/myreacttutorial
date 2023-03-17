import React from 'react'
import { useState } from 'react'
import UserCount from './PureComp/UserCount';

const PureComponent = () => {
    const [flag,setFlag]=useState(true);
    console.log("PureComponent component is rendering")
  return (
    <>
      <p>Hello Good {flag?"Morning":"Afternoon"}</p>
      <button onClick={()=>setFlag(!flag)}>Toggle</button>
      <UserCount/>
    </>
  )
}

export default PureComponent
