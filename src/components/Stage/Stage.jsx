import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Html } from "@react-three/drei";
import "./Stage.css";
import { useNavigate } from "react-router-dom";
const Stage = ({ position, stageZoomIn, link }) => {
  const navigate = useNavigate();
  const handleRoute = (link) => {
    navigate(`/${link}`);
  };
  return (
    <Html position={position}>
      <div onClick={() => handleRoute(link)}>
        <FaLocationDot
          className={`${stageZoomIn ? "stage-size" : ""} normalstage `}
        />
      </div>
    </Html>
  );
};

export default Stage;
