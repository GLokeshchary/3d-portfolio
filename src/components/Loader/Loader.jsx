import React from "react";
import { FaAnchor, FaSkullCrossbones } from "react-icons/fa";
import { Html } from "@react-three/drei";
const Loader = ({ flag }) => {
  return (
    <Html center>
      <div
        style={{
          display: "flex",
          width: "max-content",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {flag === "main" ? (
          <>
            <div
              style={{
                fontSize: "50px",
              }}
            >
              <FaAnchor />
            </div>
            <div>Hoisting the sails..!!!</div>
          </>
        ) : (
          <>
            <div
              style={{
                fontSize: "50px",
              }}
            >
              <FaSkullCrossbones />
            </div>
            <div>Loading the Pirate..!!!</div>
          </>
        )}
      </div>
    </Html>
  );
};

export default Loader;
