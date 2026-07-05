import { FaTelegramPlane } from "react-icons/fa";
import Features from "./Features";
import Footer from "./Footer";
import Modules from "./Modules";
import Button from "./Button";
import TitleText from "./TitleText";

const Hero = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f172a,#020617)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
            background: "rgba(30,41,59,.55)",
            backdropFilter: "blur(15px)",
            borderRadius: "20px",
            padding: "40px",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 20px 50px rgba(0,0,0,.6)",
          }}
        >
          {/* Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/SMC.png"
              alt="MS Academy"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #FFD700",
                boxShadow: "0 0 20px rgba(255,215,0,.4)",
                marginBottom: "20px",
              }}
            />
          </div>

          {/* Title */}
          <TitleText></TitleText>

          {/* Button */}
          <Button></Button>
          <p
            style={{
              marginTop: "15px",
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button above to join our Official Telegram Group.
          </p>

          {/* Modules */}

          <Modules></Modules>

          {/* Features */}
          <Features />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Hero;
