import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)//hooks
  //let counter = 15;
  let removevalue= ()=> {
    if(counter>0){
    counter=counter -1;
    setCounter(counter)
    }
  }
  let addValue = () =>{
    //console.log("value added",Math.random());
    if(counter<20){
    console.log(counter);// it is updating but without ui  updation
    counter=counter +1;
    setCounter(counter)
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2> counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removevalue}> remove Value</button>
    </>
  )
}

export default App
