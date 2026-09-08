import { useState } from 'react'

import './App.css'

function App() {
 //const [count, setCount] = useState(0) // hooks
 const [color,SetColor]= useState("violet")
  return (
    
<div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gaap-3 shadow-lg bg-white px-3 py-2.5 rounded-3xl">
<button onClick={()=> SetColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
<button onClick={()=> SetColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
<button onClick={()=> SetColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>

</div>
</div>
      </div>
    
  )
}

export default App
