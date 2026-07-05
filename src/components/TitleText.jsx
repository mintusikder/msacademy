import React from "react";
const data = {
  title: "MS Academy",
  subtitle: `🎓 ১৬টি সম্পূর্ণ ফ্রি Live SMC Forex Trading Class — Beginner থেকে Advanced পর্যন্ত ধাপে ধাপে শিখুন।
`,
};
const TitleText = () => {
  return (
    <>
      <h1
        style={{
          color: "#FFD700",
          fontSize: "2.2rem",
          fontWeight: "700",
        }}
      >
        {data.title}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          whiteSpace: "pre-line",
          fontSize: "18px",
          lineHeight: "1.8",
          marginTop: "20px",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        {data.subtitle}
      </p>
    </>
  );
};

export default TitleText;
