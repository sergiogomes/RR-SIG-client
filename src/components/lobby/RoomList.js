import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";

import Icon from "../../components/core/Icon";

const RoomList = ({ name, rooms }) => {
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
      !name ||
      item.status === "private" ||
      item.status === "inGame" ||
      item.avaliable === item.slots
    )
      return true;
    else return false;
  };

  return (
    <div>
      <h4>Room list</h4>
      <Table dark hover striped responsive size="sm" className="text-center">
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
                <td className="text-left">{item.name}</td>
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
                    <Button disabled={handleJoinButton(item)} size="sm">
                      Join
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomList;
