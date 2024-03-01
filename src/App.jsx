import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar'
import { Outlet } from 'react-router-dom'
import MyFooter from './components/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyNavbar/>
      <div className="min-h-screen">
        <Outlet/>
      </div>
    <MyFooter/>
    </>
  )
}

export default App
