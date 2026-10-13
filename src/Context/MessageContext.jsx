import React, { useState, useEffect, useRef } from "react";
import Chatinput from "../components/Chatinput";
import Message from "../components/Message";

const MessageContext = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSend = (text) => {
    setMessages((prevMessages) => [...prevMessages, text]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        <div ref={messagesEndRef} />
      </div>

      <div className="shrink-0">
        <Chatinput onSend={handleSend} />
      </div>
    </div>
  );
};

export default MessageContext;
