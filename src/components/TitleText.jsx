import React from "react";

const data = {
  title: "MS Academy",
  subtitle: `🎁 Professional SMC Indicator দিয়ে Real Market Analysis করুন, Trading Skill উন্নত করুন এবং আরও আত্মবিশ্বাসের সাথে প্রতিটি Trade নিন।`,
};

//   subtitle: `🎁 ইন্ডিকেটর পেতে আজই আমাদের Official Telegram Group-এ Join করুন!`,
//   subtitle: `🎁 Daily Profits • Weekly Growth
  // 💰 Earn Up to $200+ Daily`,

const TitleText = () => {
  return (
    <>
      <h1 className="text-[#FFD700] text-3xl md:text-4xl font-bold">
        {data.title}
      </h1>

      <p className="mt-3 mb-3 whitespace-pre-line text-base md:text-lg leading-8 font-semibold text-white">
        {data.subtitle}
      </p>
    </>
  );
};

export default TitleText;