import React from "react";
import { InputGroupAddon, InputGroup, Button, Input } from "reactstrap";

const ChatBar = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <InputGroup>
        <Input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
        <InputGroupAddon
          addonType="append"
          type="submit"
          onClick={(event) => sendMessage(event)}
        >
          <Button>Send</Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default ChatBar;
