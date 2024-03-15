import { useState } from 'react'
import './App.css'
//let counter = 5

function App() {
const [counter,setCounter] = useState(15)

const addValue = ()=>{
  if(counter<20)
setCounter(counter+1)
else alert("Value can't be increased")
}
const removeValue = ()=>{
  if(counter>0)
  setCounter(counter-1)
else alert("Value can't be decreased")
}

  return (
    <>
     <h1>Chai or React</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
