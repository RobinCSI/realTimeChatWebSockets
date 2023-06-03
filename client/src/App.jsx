// import { useState } from 'react'
// import './App.css'
import io from 'socket.io-client'
import LandingPage from './pages/landingPage/LandingPage'
import ChatPage from './pages/chatPage/ChatPage'

import './App.module.css'

import {Routes, Route} from 'react-router-dom'

const socket=io.connect("http://localhost:5174") //connecting frontend to backend

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage socket={socket}/>}/>
        <Route path="/chatPage/:chatRoomName/:userName" element={<ChatPage socket={socket}/>}/>      
      </Routes>
    </>
  )
}

export default App
