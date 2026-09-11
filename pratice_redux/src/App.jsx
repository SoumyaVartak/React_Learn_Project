import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
 

import { useDispatch } from 'react-redux'
import { addData } from './features/value/valueslice'
import { useSelector } from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
const [input, setInput] = useState('')
const dispatch = useDispatch()
 const addDataHandler = () => {
    dispatch(addData(input))
    setInput('')
  }
  const value = useSelector(state => state.value.value)
  return (
    <>
   <input
  value={input}
  onChange={(e) => setInput(e.target.value)}

/>
 <button onClick={addDataHandler}>
        Add
      </button>
      <h2>{value}</h2>
</>
  )
}

export default App
