import React from 'react';
import PropTypes from 'prop-types';

const sampleMessages = [
  {
    username: 'Michal',
    message: 'comment',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
];

function Chat(props) {
  const renderMessages = () => {
    return sampleMessages.map((msg) => {
      const { username, message, time, photoUrl } = msg;
      return (
        <div className='message d-flex mb-3 align-items-center'>
          <img src={photoUrl} alt='' className='me-2' />
          <div className='d-flex flex-column align-items-start'>
            <span className='username'>{username}</span>
            <p className='message-text'>{message}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='chat'>
      <h1>Chat</h1>
      <div className='messages'>{renderMessages()}</div>
    </div>
  );
}

Chat.propTypes = {};

export default Chat;
