import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";

import RoomList from "./RoomList";

const initialRoomState = [
  {
    id: 1,
    name: "Peshawar",
    status: "private",
    map: "",
    slots: 5,
    avaliable: 1,
  },
  { id: 2, name: "Chach", status: "public", map: "", slots: 5, avaliable: 5 },
  {
    id: 3,
    name: "Herdaler",
    status: "public",
    map: "",
    slots: 5,
    avaliable: 2,
  },
  {
    id: 4,
    name: "Pontlevoy",
    status: "public",
    map: "",
    slots: 5,
    avaliable: 3,
  },
  {
    id: 5,
    name: "Vlaardingen",
    status: "private",
    map: "",
    slots: 5,
    avaliable: 4,
  },
  {
    id: 6,
    name: "Srivijaya",
    status: "inGame",
    map: "",
    slots: 5,
    avaliable: 5,
  },
  {
    id: 7,
    name: "Golpejera",
    status: "inGame",
    map: "",
    slots: 5,
    avaliable: 5,
  },
  {
    id: 8,
    name: "Gosannen",
    status: "public",
    map: "",
    slots: 5,
    avaliable: 2,
  },
];

const Lobby = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [rooms] = useState(initialRoomState);

  return (
    <div>
      <div>
        <h1>Lobby</h1>
        <div>
          <Input
            placeholder="Your Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <RoomList name={name} rooms={rooms} />
        <div>
          <h4>Create your own room</h4>
          <Input
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/newmatch?name=${name}&room=${room}`}
          >
            <Button type="submit">Create Room</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
