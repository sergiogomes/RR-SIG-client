import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button type="submit" onClick={(event) => sendMessage(event)}></button>
    </form>
  );
};

export default Input;
