import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  
   <h1>Learn redux toolKit</h1>
 <AddTodo/>
 <Todos />
   </>
  )
}

export default App
