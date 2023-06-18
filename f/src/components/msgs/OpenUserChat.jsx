import React, { useState } from "react";

const OpenUserChat = ({ item, user }) => {
  const [sender, setSender] = useState(
    item.sender._id === user._id ? true : false
  );

  return (
    <li
      style={{ listStyle: `none` }}
      className="w-100 p-3 hover1 cursor d-flex"
    >
      <p></p>
    </li>
  );
};

export default OpenUserChat;
