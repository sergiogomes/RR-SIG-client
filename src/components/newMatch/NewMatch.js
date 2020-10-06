import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Chat from "../chatBox/Chat";
import Settings from "./Settings";

let socket;

const NewMatch = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  // const ENDPOINT = "localhost:5000";
  const ENDPOINT = "https://rr-sig.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});
    console.log("emit join");

    setName(name);
    setRoom(room);

    return () => {
      socket.emit("disconnect");
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    console.log("listening to message");
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", (data) => {
      setUsers(data.users);
    });
    console.log("listening to roomData");
  }, [users]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const changeReign = (reign) => {
    socket.emit("changeReign", reign);
  };

  const changeReady = (ready) => {
    socket.emit("changeReady", ready);
  };

  return (
    <div>
      <Settings
        users={users}
        name={name.toLowerCase()}
        changeReign={changeReign}
        changeReady={changeReady}
      />
      <Chat
        name={name}
        room={room}
        messages={messages}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default NewMatch;
