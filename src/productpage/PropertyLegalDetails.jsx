import React from "react";

const PropertyLegalDetails = () => {
  const developers = [
    { id: 1, name: "Developer ID", price: "$1,200,000" },
    { id: 2, name: "Developer ID", price: "$1,200,000" },
    { id: 3, name: "Developer ID", price: "$1,200,000" },
    { id: 4, name: "Developer ID", price: "$1,200,000" },
    { id: 5, name: "Developer ID", price: "$1,200,000" },
    { id: 6, name: "Developer ID", price: "$1,200,000" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#2e3438",
        padding: "60px 0",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ width: "85%", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ color: "#d4af37", fontSize: "14px", margin: 0 }}>LEGAL</p>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "600",
              margin: "10px 0 0 0",
              lineHeight: "1.2",
              fontFamily: "serif",
            }}
          >
            PROPERTY LEGAL DETAILS
          </h2>
        </div>

        {/* Developer Cards (2 rows × 3 columns) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {developers.map((dev) => (
            <div
              key={dev.id}
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                padding: "20px",
                minHeight: "100px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {dev.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {dev.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyLegalDetails;
