import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const Infobar = ({ room }) => {
  return (
    <div>
      <div>
        <img src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default Infobar;
