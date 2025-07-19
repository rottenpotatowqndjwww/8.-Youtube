import React, { useState } from 'react'
import Home from './Pages/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Video from './Pages/Video/Video.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css' 

const App = () => {
  const [sidebar, setSideBar] = useState(false);
  
  return (
    <div className="app-container">
      <Navbar setSideBar={setSideBar}/>
      <div className="routes-container">
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
      </div>
    </div>
  )
}

export default App