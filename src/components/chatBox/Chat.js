import React, { useState, useEffect } from "react";
import { Card, CardFooter, CardBody } from "reactstrap";
import queryString from "query-string";
import io from "socket.io-client";

import Infobar from "./components/InfoBar";
import ChatBar from "./components/ChatBar";
import Messages from "./components/Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // const ENDPOINT = "localhost:5000";
  const ENDPOINT = "https://rr-sig.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

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
