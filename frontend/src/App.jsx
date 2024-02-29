import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Home } from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
    </div>
  )
}

export default App
