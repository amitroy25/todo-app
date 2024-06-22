 
 import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'
 

export default function Counter(){
    const [count,setCount]=useState(0)
    function increamentCounterParentFunction(by){
        setCount(count+by)
    }
    function decreamentCounterParentFunction(by){
        setCount(count-by)
    }
    function resetCounter(){
        setCount(0)
    }
   
    return (
          <>
          <span className="totalcount">{count}</span>
          <CounterButton by={1} incrementMethod={increamentCounterParentFunction} decrementMethod={decreamentCounterParentFunction} />
          <CounterButton by={2} incrementMethod={increamentCounterParentFunction} decrementMethod={decreamentCounterParentFunction}/>
          <CounterButton by={5} incrementMethod={increamentCounterParentFunction} decrementMethod={decreamentCounterParentFunction}/>
          <button className="resetButton" onClick={resetCounter}>Reset</button>


          </>
        
          
   
      );


}

