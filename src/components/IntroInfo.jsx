import React from "react";
import { Html } from "@react-three/drei";
import "./IntroInfo.css";
import { useThree } from "@react-three/fiber";
const IntroInfo = ({ introPosition }) => {

    const {camera}= useThree();


    const handleStageEvent=()=>{
        camera.position.set(1,1,1);
        camera.lookAt(0,0,0);
    }

  return (
    <Html className="intro-container" position={introPosition}>
      <div className="into">
        <div className="inner-intro">
          <span className="name">Hi , My Name Is Lokesh Chary.</span>
          <span className="status">I'm Software Engineer.</span>
        </div>
        <div className="next-button"><span onClick={()=>handleStageEvent()}>next</span></div>
      </div>
    </Html>
  );
};

export default IntroInfo;
