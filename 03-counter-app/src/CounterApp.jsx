import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    
    const handleAdd=()=> {
        setCounter(counter + 1);
       // setCounter((c)=> c + 20)
    }
    const handleRest=()=> {
        setCounter(counter - 1);
       // setCounter((c)=> c + 20)
    }
    const handleReset=()=> {
        setCounter(value);
       // setCounter((c)=> c + 20)
    }
    

  return ( 
      <>
          <h1>CounterApp</h1>
          <h2> {counter} </h2>
          <button onClick={handleAdd} >
              +1
          </button>
          <button onClick={handleRest} >
              -1
          </button>
          <button onClick={handleReset} >
              Reset
          </button>
      </>
  )
}

CounterApp.Prototype = {
    value: PropTypes.number.isRequired
   
}