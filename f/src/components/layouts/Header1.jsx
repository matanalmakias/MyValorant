import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { content } from "../../utils/content";

const Header1 = () => {
  const { items } = content.menu;
  const nav = useNavigate();

  return (
    <div className="bg-light p-2 ">
      <ul className="nav-list d-flex  gap-2 mt-3">
        {items?.map((item, index) => (
          <li
            key={index}
            className="d-flex align-items-center justify-content-center text-center"
          >
            <a
              className="nav-item p-3 hover1"
              onClick={() => nav(`${import.meta.env.BASE_URL}${item.pathLink}`)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header1;
