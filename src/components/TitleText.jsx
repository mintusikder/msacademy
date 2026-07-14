import React from "react";

const data = {
  title: "MS Academy",
  subtitle: `🎁 ইন্ডিকেটর পেতে আজই আমাদের Official Telegram Group-এ Join করুন!`,
};

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