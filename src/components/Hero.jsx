import {
  FaTelegramPlane,
  FaChartLine,
  FaShieldAlt,
  FaBookOpen,
} from "react-icons/fa";

const Hero = () => {
  const data = {
    brand: "Premium Trading Community",
    title: "MS Academy",
    subtitle:
      "MS Academy এর সাথে শুরু করুন আপনার Professional Trading Journey। নিয়মিত Market Analysis, Trading Tips এবং Premium Support পেতে আজই আমাদের Telegram Community-তে যুক্ত হোন।",

    telegramLink: "https://t.me/msacademy025",

    features: [
      { text: "Trading Guidance", icon: <FaBookOpen /> },
      { text: "Market Analysis", icon: <FaChartLine /> },
      { text: "Risk Management Tips", icon: <FaShieldAlt /> },
      { text: "Free Daily Signals", icon: <FaTelegramPlane /> },
    ],
  };
  const handleTelegram = () => {
    window.fbq?.("track", "Lead");
    window.fbq?.("trackCustom", "TelegramClick");

    window.open(data.telegramLink, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              box-shadow: 0 10px 25px rgba(34,197,94,0.25);
            }

            50% {
              transform: scale(1.08);
              box-shadow:
                0 15px 40px rgba(34,197,94,0.7),
                0 0 30px rgba(34,197,94,0.6);
            }

            100% {
              transform: scale(1);
              box-shadow: 0 10px 25px rgba(34,197,94,0.25);
            }
          }

          .telegram-btn {
            animation: pulseGlow 2s infinite;
            transition: all 0.3s ease;
          }

          .telegram-btn:hover {
            transform: scale(1.12);
            filter: brightness(1.1);
          }
        `}
      </style>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a, #020617)",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            width: "100%",
            textAlign: "center",
            background: "rgba(30, 41, 59, 0.55)",
            padding: "40px",
            borderRadius: "20px",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          }}
        >
          {/* LOGO */}
          <div
            className="flex items-center justify-center"
            style={{ marginBottom: "15px" }}
          >
            <img
              src="/SMC.png"
              alt="MS Academy"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #FFD700",
                boxShadow: "0 0 20px rgba(255,215,0,0.4)",
              }}
            />
          </div>

          {/* TITLE */}
          <h1
            style={{
              color: "#FFD700",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            {data.title}
          </h1>

          {/* SUBTITLE */}
          <p
            style={{
              fontSize: "18px",
              color: "#FFFFFF",
              lineHeight: "1.6",
              marginTop: "15px",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            {data.subtitle}
          </p>

          {/* ANIMATED TELEGRAM BUTTON */}
          <button
            onClick={handleTelegram}
            className="telegram-btn"
            style={{
              background: "linear-gradient(90deg, #22c55e, #16a34a)",
              color: "white",
              padding: "16px 40px",
              border: "none",
              borderRadius: "12px",
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            <FaTelegramPlane />
            JOIN TELEGRAM
          </button>

          {/* INFO TEXT */}
          <p
            style={{
              fontSize: "14px",
              color: "#94a3b8",
              marginTop: "15px",
            }}
          >
            Official Telegram Group-এ join করতে button-এ click করুন
          </p>

          {/* FEATURES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "30px",
              textAlign: "left",
            }}
          >
            {data.features.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#1e293b",
                  padding: "15px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "15px",
                }}
              >
                <span
                  style={{
                    color: "#FFD700",
                    fontSize: "18px",
                  }}
                >
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div
            style={{
              marginTop: "30px",
              fontSize: "12px",
              color: "#64748b",
            }}
          >
            <p>© 2026 MS Academy. All rights reserved.</p>
            <p>Advertisement by MS Academy Marketing Team</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;  