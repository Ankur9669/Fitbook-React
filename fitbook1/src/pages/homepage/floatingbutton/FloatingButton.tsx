import React from "react";
import { GrAdd, IoAddOutline } from "../../../assets/icons/icons";
import "./floatingbutton.css";
const FloatingButton = () => {
  return (
    <button className="floating-button">
      <IoAddOutline
        style={{ fontSize: "1.3rem", color: "white", fontWeight: "800" }}
      />
    </button>
  );
};

export default FloatingButton;
