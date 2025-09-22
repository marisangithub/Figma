import React from "react";

const PricingPayment = () => {
    return (
        <section style={{ backgroundColor: "#1e2326", padding: "60px 0", color: "white" }}>
            <div className="container" style={{ width: "85%", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ marginBottom: "40px" }}>
                    <p style={{ color: "#d4af37", fontSize: "14px", margin: 0 }}>PAYMENT</p>
                    <h2
                        style={{
                            fontSize: "48px",
                            fontWeight: "600",
                            margin: "10px 0 0 0",
                            lineHeight: "1.2",
                            fontFamily: "serif",
                        }}
                    >
                        PRICING AND PAYMENT SCHEDULE
                    </h2>
                </div>

                {/* Content - Left + Right */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        gap: "30px",
                    }}
                >
                    {/* Left Card */}
                    <div
                        style={{
                            backgroundColor: "#fff",
                            color: "#333",
                            borderRadius: "12px",
                            padding: "30px",
                        }}
                    >
                        <h3 style={{ fontSize: "22px", color: "#d4af37", margin: 0 }}>
                            AED 10,000,000
                        </h3>
                        <p style={{ fontSize: "14px", margin: "10px 0 20px 0", lineHeight: "1.6" }}>
                            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor inci simply free.
                        </p>

                        {/* Milestones */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    padding: "10px 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Milestone</span> <span>↓</span>
                            </div>
                            <div
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    padding: "10px 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Milestone</span> <span>↓</span>
                            </div>
                            <div
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    padding: "10px 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Milestone</span> <span>↓</span>
                            </div>
                            <div
                                style={{
                                    borderBottom: "1px solid #ddd",
                                    padding: "10px 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <span>Milestone</span> <span>↓</span>
                            </div>
                        </div>

                        {/* Handover Button */}
                        <div
                            style={{
                                marginTop: "20px",
                                backgroundColor: "#f5deb3",
                                textAlign: "center",
                                padding: "12px",
                                borderRadius: "6px",
                                fontWeight: "600",
                                color: "#333",
                            }}
                        >
                            HANDOVER
                        </div>
                    </div>

                    {/* Right Card */}
                    <div
  style={{
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: "12px",
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: "40px",
  }}
>
  {/* Left Side - Mortgage Form */}
  <div style={{ flex: 2 }}>
    <h3 style={{ fontSize: "20px", color: "#d4af37", marginBottom: "20px" }}>
      MORTGAGE CALCULATOR
    </h3>

    <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <select style={{ padding: "10px", border: "none", borderBottom: "1px solid #333" }}>
        <option>form content</option>
      </select>
      <select style={{ padding: "10px", border: "none", borderBottom: "1px solid #333" }}>
        <option>form content</option>
      </select>
      <select style={{ padding: "10px", border: "none", borderBottom: "1px solid #333" }}>
        <option>form content</option>
      </select>
    </form>
  </div>

  {/* Right Side - Price Breakdown + Button */}
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "right",
    }}
  >
    {/* Top text */}
    <div>
      <h3 style={{ color: "#d4af37", margin: 0 }}>AED 10,000,000</h3>
      <p style={{ margin: "5px 0" }}>PRICE BREAKDOWN</p>
      <p style={{ margin: 0 }}>TAX</p>
    </div>

    {/* Submit button at bottom */}
    <button
      type="submit"
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        width: "150px",
        alignSelf: "flex-end",
      }}
    >
      SUBMIT
    </button>
  </div>
</div>

                </div>
            </div>
        </section>
    );
};

export default PricingPayment;
