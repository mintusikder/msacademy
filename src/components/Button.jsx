import { FaTelegramPlane } from "react-icons/fa";

const TelegramClick = "https://t.me/msacademy025";

const Button = () => {
  const handleTelegram = () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");

      // window.fbq("trackCustom", "TelegramClick", {
      //   destination: "Telegram",
      // });
    }

    setTimeout(() => {
      window.open("https://t.me/msacademy025", "_blank", "noopener,noreferrer");
    }, 300);
  };

  return (
    <>
      <style>{`
        @keyframes pulseGlow {
          0% {
            transform: scale(1);
            box-shadow: 0 10px 25px rgba(34,197,94,.25);
          }

          50% {
            transform: scale(1.08);
            box-shadow:
              0 15px 40px rgba(34,197,94,.7),
              0 0 30px rgba(34,197,94,.6);
          }

          100% {
            transform: scale(1);
            box-shadow: 0 10px 25px rgba(34,197,94,.25);
          }
        }

        .telegram-btn {
          background: linear-gradient(90deg,#22c55e,#16a34a);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 16px 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          animation: pulseGlow 2s infinite;
          transition: all .3s ease;
        }

        .telegram-btn:hover {
          transform: translateY(-3px) scale(1.05);
          filter: brightness(1.1);
        }

        .telegram-btn:active {
          transform: scale(.97);
        }
      `}</style>

      <button onClick={handleTelegram} className="telegram-btn">
        <FaTelegramPlane size={20} />
        Get Free Class
      </button>
    </>
  );
};

export default Button;
