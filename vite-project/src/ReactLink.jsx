import React from "react";
import { NavLink } from "react-router-dom";
import "./reactLink.css";

const ReactLink = () => {
  return (
    <nav>
      <NavLink className="title" to="/">
        Register Form
      </NavLink>
    </nav>
  );
};

export default ReactLink;
