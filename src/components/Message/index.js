import React from 'react';
import './message.css';

const Message = ({message}) => {
  return (
    <h3 className="message">{message}</h3>
  )
}

export default Message;