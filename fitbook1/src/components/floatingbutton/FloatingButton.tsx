import React from "react";
import { GrAdd, IoAddOutline } from "../../assets/icons/icons";
import "./floatingbutton.css";
import { FloatingButtonProps } from "./FloatingButtonProps";
const FloatingButton = (props: FloatingButtonProps) => {
  const { setModalOpen } = props;
  const handleFloatingButtonClick = () => {
    setModalOpen(true);
  };
  return (
    <button className="floating-button" onClick={handleFloatingButtonClick}>
      <IoAddOutline
        style={{ fontSize: "1.3rem", color: "white", fontWeight: "800" }}
      />
    </button>
  );
};

export default FloatingButton;
