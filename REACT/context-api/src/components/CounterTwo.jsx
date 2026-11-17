import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterTwo = () => {
    const {count,increment,decrement,reset}=useCounter();
  return (
    <div>
        <h2>Counter Two : {count}</h2>
        <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo;