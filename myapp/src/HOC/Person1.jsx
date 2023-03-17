import React from 'react'

import Hoc from './Hoc';

const Person1 = ({money,increase}) => {//This is another way
    
  return (
    <div>
      <h2>Jimmy is ofering {money}</h2>
      <button onClick={increase}>Incr</button>
    </div>
  )
}

export default Hoc(Person1);
