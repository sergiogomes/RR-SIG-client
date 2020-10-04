import React from "react";
import ReactEmoji from "react-emoji";
import { CardText } from "reactstrap";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (user === "admin") {
    return (
      <div className="text-center">
        <small className="badge badge-light">{user}</small>
        <small> {ReactEmoji.emojify(text)}</small>
      </div>
    );
  }

  return isSentByCurrentUser ? (
    <div className="text-right">
      <small className="badge badge-primary">{trimmedName}</small>
      <div>
        <CardText>{ReactEmoji.emojify(text)}</CardText>
      </div>
    </div>
  ) : (
    <div className="text-left">
      <small className="badge badge-secondary">{user}</small>
      <div>
        <CardText>{ReactEmoji.emojify(text)}</CardText>
      </div>
    </div>
  );
};

export default Message;
