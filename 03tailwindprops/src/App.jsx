import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let muObj={
    username: "soumya",
    age: 21
  }
  return (
    <>
     <h1 className='bg-green-400 text-block p-4 rounded-xl mb-4' >
      Tailwindcss
     </h1>
     <Card username="chaiaurcodek" someobj={muObj}/>
     <Card username="soumya" />
     
     <Card  />
     
    </>
  )
}

export default App
