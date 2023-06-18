import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const nav = useNavigate();
  return (
    <button onClick={() => nav(-1)} className="btn4 m-2 w">
      Go back
    </button>
  );
};

export default BackBtn;
