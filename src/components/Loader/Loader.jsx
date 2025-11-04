import React from "react";
import { FaAnchor, FaSkullCrossbones } from "react-icons/fa";
import { Html } from "@react-three/drei";

const Loader = ({ flag }) => {
  const isMain = flag === "main";

  const loaderStyles = {
    container: {
      width: "max-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 30px",
      background: "rgba(0, 0, 0, 0.6)",
      borderRadius: "15px",
      backdropFilter: "blur(8px)",
      color: "#FFD700",
      fontFamily: "'Pirata One', cursive, sans-serif",
      textAlign: "center",
      maxWidth: "250px",
      boxShadow: "0 0 20px rgba(0,0,0,0.5)",
      animation: "fadeIn 1s ease-in-out",
    },
    icon: {
      fontSize: "3rem",
      marginBottom: "10px",
      animation: "bounce 1.5s infinite",
      color: "#FF4500",
    },
    text: {
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#fff",
    },
    "@keyframes bounce": {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" },
    },
    "@keyframes fadeIn": {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
  };

  return (
    <Html center>
      <div style={loaderStyles.container}>
        <div style={loaderStyles.icon}>
          {isMain ? <FaAnchor /> : <FaSkullCrossbones />}
        </div>
        <div style={loaderStyles.text}>
          {isMain
            ? "Charting the seas... Loading 3D treasures!"
            : "Summoning the Pirate... Stand by! ☠️"}
        </div>
      </div>
    </Html>
  );
};

export default Loader;
