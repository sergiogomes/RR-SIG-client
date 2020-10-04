import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Input } from "reactstrap";

import Icon from "../../components/core/Icon";

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

  const handleIcon = (item) => {
    if (item.status === "private") {
      return <Icon name="Lock" />;
    } else if (item.status === "inGame") {
      return <Icon name="x-circle" />;
    } else if (item.avaliable === item.slots) {
      return <Icon name="person-x" />;
    } else {
      return <Icon name="person-plus" />;
    }
  };

  const handleJoinButton = (item) => {
    if (
      item.status === "private" ||
      item.status === "inGame" ||
      item.avaliable === item.slots
    )
      return true;
    else return false;
  };

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
        <div>
          <h4>Room list</h4>
          <Table dark hover striped responsive size="sm">
            <thead>
              <tr>
                <th>Status</th>
                <th>Room</th>
                <th>Slots</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms &&
                rooms.map((item) => (
                  <tr key={item.id}>
                    <td>{handleIcon(item)}</td>
                    <td>{item.name}</td>
                    <td>
                      {item.avaliable}/{item.slots}
                    </td>
                    <td>
                      <Link
                        onClick={(event) =>
                          handleJoinButton(item) ? event.preventDefault() : null
                        }
                        to={`/chat?name=${name}&room=${item.name}`}
                      >
                        <Button
                          disabled={handleJoinButton(item)}
                          size="sm"
                          color="link"
                        >
                          Join
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
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
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button type="submit">Create Room</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
