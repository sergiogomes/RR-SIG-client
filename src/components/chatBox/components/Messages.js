import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="height-300" mode="bottom">
      {messages.map((message, i) => (
        <div className="mr-3" key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
