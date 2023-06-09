import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../redux/chatsSlice'

import styles from './ChatPage.module.css'

import {useParams} from 'react-router-dom'


const ChatPage = ({socket}) => {
  const [currentMessage, setCurrentMessage]=useState('')
  const {chatRoomName, userName}=useParams()
  const dispatch=useDispatch()

  const chatsArr=useSelector(state=>state.chats.value)
  const roomChats=chatsArr.filter(chat=>chat.room==chatRoomName)

  const usersArr=useSelector(state=>state.users.value)
  const roomUsers=usersArr.filter(user=>user.chatRoom==chatRoomName)
  const otherRoomUsers = roomUsers.filter(user => user.userName != userName)
  
  const bottomRef=useRef(null)

  function handleCurrentMessage(e){
    setCurrentMessage(e.target.value)
  }

  async function handleSendMessage(){
    // console.log(otherRoomUsers)
    // if(otherRoomUsers.length==0){
    //   alert("No one is there to chat")
    // }
    // else{
    if(currentMessage){
      const messageData = {
        room: chatRoomName,
        author: userName,
        message: currentMessage,
        // time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        time: new Date().toLocaleTimeString()
      };

      await socket.emit("send_message", messageData)
      dispatch(addUser(messageData))
      
    }
  // }
  setCurrentMessage('')
  }

  useEffect(()=>{
    socket.on("receive_backendMessage", (data)=>{
      // console.log(data)
      dispatch(addUser(data))

      

    })
  }, [socket])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behaviour:'smooth'})
  }, [roomChats]);

  return (
    <div className={styles.main_container}>
      <h3>Chatroom {chatRoomName} (Live Chat)</h3>
      <div className={styles.chatsBox}>
        {roomChats.map((chat, index) => (
          <div
            key={index}
            className={chat.author == userName ? styles.self : styles.others}
          >
            <div className={styles.message}>
              <p>{chat.message}</p>
            </div>
            <div className={styles.metaMessage}>
              <span className={styles.author}>{chat.author}</span>
              <span className={styles.time}>{chat.time}</span>
            </div>
            {/* Creating a dummy div to scroll to bottom in chatbox. We can also use react scroll to bottom library. */}
            <div ref={bottomRef} />
          </div>
        ))}
      </div>
      {/* {users.map((user, index)=><div key={index}><span>{user.chatRoom}</span><span>{user.userName}</span></div>)} */}
      <div>
        <label>
          {userName}, write your message here:
          <input
            type="text"
            value={currentMessage}
            placeholder="Hello...."
            onChange={handleCurrentMessage}
            onKeyDown={(e) => {
              e.key == "Enter" && handleSendMessage();
            }}
          />
        </label>
        <button onClick={handleSendMessage}>&#9658;</button>
      </div>
      {/* {console.log(roomChats)} */}
    </div>
  );
}

export default ChatPage