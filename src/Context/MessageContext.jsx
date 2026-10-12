import React, { useState } from 'react';
import Chatinput from '../components/Chatinput';
import Message from '../components/Message';

const MessageContext = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    setMessages((prevMessages) => [...prevMessages, text]);
  };

  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}

      <Chatinput onSend={handleSend} />
    </div>
  );
};

export default MessageContext;