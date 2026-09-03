import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
function MyApp(){
  return(
    <>
    <h1>function declared in main</h1>
    </>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>vist googlr</a>
)
const anotherUser="vartak"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google]',
  anotherUser
)
createRoot(document.getElementById('root')).render(

    
    reactElement
  
)
