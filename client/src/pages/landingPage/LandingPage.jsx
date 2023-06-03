import React, {useState} from 'react'

import { addUser } from '../../redux/usersSlice'
import {useDispatch} from 'react-redux'

import {useNavigate} from 'react-router-dom'

import io from 'socket.io-client'

import styles from './LandingPage.module.css'

export default function LandingPage({socket}){
  const [userName, setUserName]=useState('')
  const [chatRoomName, setChatRoomName]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()

  // const socket=io.connect("http://localhost:5174") //connecting frontend to backend

  function handleUserInput(e){
    e.preventDefault()
    if(userName && chatRoomName){
      socket.emit("join_room", chatRoomName)
    dispatch(addUser({chatRoom: chatRoomName, userName: userName}))
    navigate(`/chatPage/${chatRoomName}/${userName}`)
    }
  }

  function handleUserName(e){
    setUserName(e.target.value)
  }

  function handleChatRoomName(e){
    setChatRoomName(e.target.value)
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.details_container}>
        <h3>Enter details to chat with other people</h3>
        <form onSubmit={handleUserInput} className={styles.form}>
        <label>Your chat name: 
          <input type="text" onChange={handleUserName} placeholder="JDoe" />
          </label>
          <label>Chat room name: 
          <input type="text" onChange={handleChatRoomName} placeholder="Alpha" />
          </label>
          <button type="submit">Start chatting</button>
          </form>
      </div>
    </div>
  )
}