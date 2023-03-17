import React from 'react'
import Hoc from './Hoc';

const Person2 = (props) => {
    const {money,increase}=props;//This is one way
  return (
    <div>
      <h2>John is ofering {money}</h2>
      <button onClick={increase}>Incr</button>
    </div>
  )
}

export default Hoc(Person2)