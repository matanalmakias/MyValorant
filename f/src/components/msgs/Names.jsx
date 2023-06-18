import React from "react";

const Names = ({ item, toggleOpenMsg }) => {
  return (
    <li
      onClick={() => toggleOpenMsg(item._id)}
      style={{ listStyle: `none` }}
      className="w-100 p-3 hover1 cursor"
    >
      {item.name}
    </li>
  );
};

export default Names;
