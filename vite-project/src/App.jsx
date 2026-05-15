import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'

function App() {

  const[input,setInput]=useState("");
  return(
    <div className='app'>
   <Header/>
   <div className='todo_container'>
    <div className='input-section'>
    
        <input 
        type="text"
        placeholder='What task do you want to do?'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
    </div>
   </div>
   </div>
  )
}

export default App
