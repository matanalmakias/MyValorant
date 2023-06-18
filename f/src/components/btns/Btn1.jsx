import React from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import * as Icons from "react-icons/ai"; // Import all icons from the desired icon package (in this example, we're using icons from react-icons/ai)

const Btn1 = ({ icon, text }) => {
  const nav = useNavigate();
  const IconComponent = Icons[icon]; // Get the corresponding icon component based on the provided icon name

  return (
    <button className="btn5 m-2 p-3">
      <IconContext.Provider value={{ className: "btn-icon" }}>
        <IconComponent size={40} />
      </IconContext.Provider>
      {text}
    </button>
  );
};

export default Btn1;
