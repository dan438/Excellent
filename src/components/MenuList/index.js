import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Index = ({ link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${link}`);
  };

  return (
    <div>
      <div onClick={handleClick} className="menu">
        <CgMenuGridO size={24} color="#00AC9F" />
        <span>Menu list</span>
      </div>
    </div>
  );
};

export default Index;
