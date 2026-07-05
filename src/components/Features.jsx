import React from "react";
import {
  FaTelegramPlane,
  FaChartLine,
  FaShieldAlt,
  FaBookOpen,
} from "react-icons/fa";


const features = [
  {
    text: "Live Market Analysis",
    icon: <FaBookOpen />,
  },
  {
    text: "Entry & Exit Strategy",
    icon: <FaChartLine />,
  },
  {
    text: "Risk Management Tips",
    icon: <FaShieldAlt />,
  },
  {
    text: "Free Support",
    icon: <FaTelegramPlane />,
  },
];

const Features = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      {features.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            color: "#fff",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              color: "#FFD700",
              fontSize: "24px",
            }}
          >
            {item.icon}
          </span>

          <span
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Features;