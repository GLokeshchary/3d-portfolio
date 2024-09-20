import React from "react";
import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <Html>
      <div
        style={{
          display: "flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        Loading...
      </div>
    </Html>
  );
};

export default Loader;
