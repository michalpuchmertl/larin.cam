import React from 'react';
import PropTypes from 'prop-types';

const sampleMessages = [
  {
    username: 'Michal',
    message: 'Jeee Larinka',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Adam',
    message: 'Je báječná',
    time: '17:03',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Michal',
    message: 'Jeee Larinka',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Adam',
    message: 'Je báječná',
    time: '17:03',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Michal',
    message: 'Jeee Larinka',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Adam',
    message: 'Je báječná',
    time: '17:03',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Michal',
    message: 'Jeee Larinka',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
    time: '16:54',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Adam',
    message: 'Je báječná',
    time: '17:03',
    photoUrl: 'https://joyonlineschool.com/static/emptyuserphoto.png',
  },
  {
    username: 'Káťa',
    message: 'No jo opravdu',
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
      <div className='chat-header d-flex justify-content-between'>
        <span>CHAT</span>
        <span>62 LIDÍ</span>
      </div>
      <div className='chat-body'>{renderMessages()}</div>
      <div className='chat-footer'>
        <form action=''>
          <div className='form-group'>
            <input type='text' placeholder='Zpráva' />
            <button className='btn btn-primary'>SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Chat.propTypes = {};

export default Chat;
