import { useState , useCallback, useEffect,useRef} from 'react'

import './App.css'



function App() {
  //const [count, setCount] = useState(0) hooks
  const [length,setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false) 
  const [charAllowed,setcharAllowed] = useState(false) 
  const [password,setPassword]=useState("")
  //useref hook
  const passwordRef = useRef(null)
 // useCallback 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "@!#$%^&*{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
      setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasstoClipboard = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,101);
      window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect hooks
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
    return (
    <>
    <div className='w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-6 my-8 text-blue-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
     
     <input type="text" 
     value={password} 
      className='outline-none w-full py-2 px-4 bg-gray-700 text-white'
     placeholder='pass'
     readOnly
     ref={passwordRef}
     />
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
onClick={copyPasstoClipboard}>copy</button>
      </div>

         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={60}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label>length: {length}</label>

          </div>
           <div className="flex items-center gap-x-1">
             <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setnumberAllowed((prev) => !prev);
          }}
      /> <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev)
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
          
         </div>
      </div>
       
    </>
  )
}

export default App
