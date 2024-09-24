import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import {Html} from "@react-three/drei";


const Stage = ({ position }) => {
  return (
    <Html position={position}>
      <div>
      <FaLocationDot style={{color:"gold"}}/>
      </div>
    </Html>
  );
};

export default Stage;
