import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import getFirebase from '../../utils/firebase'

const COLORS = [
  '#e21400',
  '#91580f',
  '#f8a700',
  '#f78b00',
  '#58dc00',
  '#287b00',
  '#a8f07a',
  '#4ae8c4',
  '#3b88eb',
  '#3824aa',
  '#a700ff',
  '#d300e7',
];

function Chat(props) {
  

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('wss://chat.larin.cam');
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    const user = getFirebase().auth().currentUser
    setUsername(user.email)
  }, [])

  const [connected, setConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [userNum, setUserNum] = useState(0);

  const inputRef = useRef();

  if(socket) {
      socket.emit('add user', username);

      socket.on('login', (data) => {

      setUserNum(data.numUsers);
      setConnected(true)
    });

    // Whenever the server emits 'new message', update the chat body
    socket.on('new message', (data) => {
      addChatMessage(data);
    });

    // Whenever the server emits 'user joined', log it in the chat body
    socket.on('user joined', (data) => {
      setUserNum(data.numUsers);
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', (data) => {
      setUserNum(data.numUsers);
    });

    // Whenever the server emits 'stop typing', kill the typing message

    socket.on('disconnect', () => {
      // log('you have been disconnected');
    });

    socket.on('reconnect', () => {
      if (username) {
        socket.emit('add user', username);
      }
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let message = inputRef.current.value;
    // Prevent markup from being injected into the message
    // if there is a non-empty message and a socket connection
    if (message && connected) {
      inputRef.current.value = '';
      addChatMessage({ username, message });
      // tell server to execute 'new message' and send along one parameter
      socket.emit('new message', message);
    }
  };


  const addChatMessage = (data, options = {}) => {
    const now = new Date();
    const dateArr = now.toLocaleString("cs").split(" ");
    setMessages([...messages, {
      username: data.username,
      message: data.message,
      time: dateArr[dateArr.length-1],
    }]);
  };

  const getUsernameColor = (username) => {
    // Compute hash code
    let hash = 7;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    const index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const renderMessages = () => {
    return messages.map((msg) => {
      const { username, message, time, photoUrl } = msg;
      return (
        <div className='message d-flex mb-3 align-items-center'>
          <img src="https://www.makeyoutubevideo.com/assets/img/avatar.jpg" alt='' className='me-2' />
          <div className='d-flex flex-column align-items-start'>
            <span className='username'>{username}</span>
            <p className='message-text'>{message}</p>
          </div>
        </div>
      );
    });
  };

  const getWatcherString = () => {
    if(userNum === 1) {
      return `${userNum} DIVÁK`
    }
    else if(userNum <= 4) {
      return `${userNum} DIVÁCI`
    }
    return `${userNum} DIVÁKŮ`
  }

  return (
    <div className='chat'>
      <div className='chat-header d-flex justify-content-between'>
        <span>CHAT</span>
        <span>{getWatcherString()}</span>
      </div>
      <div className='chat-body'>
        {renderMessages()}
        <div ref={messagesEndRef} />
      </div>
      <div className='chat-footer'>
        <form action='' onSubmit={handleSubmit}>
          <div className='form-group d-flex'>
            <input
              type='text'
              ref={inputRef}
              placeholder='Zpráva'
              className='w-100'
            />
            <button className='btn btn-primary'>SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Chat.propTypes = {};

export default Chat;
