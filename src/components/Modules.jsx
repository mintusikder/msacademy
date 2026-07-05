import Button from "./Button";

const modules = [
  "Why SMC Trader & What is True SMC",
  "True SMC Secrets",
  "Real Pullback Identification",
  "Inducement | BOS | CHoCH",
  "Fair Value Gap (FVG)",
  "Order Flow",
  "Order Block",
  "IFC Candle Identification",
  "Liquidity & SMC Trap",
  "Daily Liquidity Entry",
  "Session Entry",
  "CHoCH Entry Modules",
  "Flip Entry Modules",
  "Single Candle Mitigation Entry",
  "Major Structure & Minor Structure Entry",
  "High Probability POI & Order Flow",
];

const Modules = () => {
  return (
    <>
      <section
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#FFD700",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          📚 Class Modules
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "35px",
            fontSize: "16px",
          }}
        >
          ১৬টি Professional Smart Money Concept (SMC) Trading Classes
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "18px",
          }}
        >
          {modules.map((module, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "18px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,.08)",
                textAlign: "left",
                transition: ".3s",
              }}
            >
              <h3
                style={{
                  color: "#22c55e",
                  marginBottom: "8px",
                  fontSize: "18px",
                }}
              >
                Class {index + 1}
              </h3>

              <p
                style={{
                  color: "#fff",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {module}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-6">
        <Button></Button>
      </div>
    </>
  );
};

export default Modules;
