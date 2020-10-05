import React from "react";

const Settings = ({ users }) => {
  return (
    <div>
      <h4>Settings</h4>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <div></div>
    </div>
  );
};

export default Settings;
