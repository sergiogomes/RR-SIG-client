import React from "react";
import { Card, CardFooter, CardBody } from "reactstrap";

import Infobar from "./components/InfoBar";
import ChatBar from "./components/ChatBar";
import Messages from "./components/Messages";

const Chat = ({ name, room, messages, message, setMessage, sendMessage }) => {
  return (
    <Card>
      <Infobar room={room} />
      <CardBody>
        <Messages messages={messages} name={name} />
      </CardBody>
      <CardFooter>
        <ChatBar
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </CardFooter>
    </Card>
  );
};

export default Chat;
