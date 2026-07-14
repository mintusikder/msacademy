import { FaTelegramPlane } from "react-icons/fa";

const telegramLink = "https://t.me/msacademy025";

const Button = () => {
  const handleTelegram = () => {
    // Check if Lead event already sent
    const leadTracked = localStorage.getItem("leadTracked");

    if (!leadTracked && typeof window.fbq === "function") {
      window.fbq("track", "Lead");

      // Save so it won't fire again
      localStorage.setItem("leadTracked", "true");
    }

    setTimeout(() => {
      window.open(telegramLink, "_blank", "noopener,noreferrer");
    }, 300);
  };

  return (
    <>


 <button
  onClick={handleTelegram}
  className="telegram-btn w-full max-w-[320px] px-6 py-3 md:px-10 md:py-4 text-base md:text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center gap-2"
>
  <FaTelegramPlane className="text-xl  md:text-2xl" />
  Join Telegram
</button>
    </>
  );
};

export default Button;