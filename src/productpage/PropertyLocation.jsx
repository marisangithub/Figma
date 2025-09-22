import React from "react";
import Locationimg from "./productimage/Proplocation.png";

const PropertyLocation = () => {
  return (
    <section
      style={{
        backgroundColor: "#1f2424",
        padding: "60px 0",
        color: "white",
      }}
    >
      <div style={{ width: "85%", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "40px", fontWeight: "600", lineHeight: "1.2" }}>
              <span style={{ color: "#d4af37", display: "block" }}>PROPERTY</span>{" "}
              LOCATION
            </h2>
          </div>
          <div style={{ maxWidth: "400px", textAlign: "right", fontSize: "14px", color: "#d4af37" }}>
            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.</p>
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              background: "white",
              color: "black",
              borderRadius: "6px 6px 0 0",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              marginRight: "5px",
            }}
          >
            FEATURE
          </button>
          <button
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              marginRight: "5px",
            }}
          >
            FEATURE
          </button>
          <button
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              marginRight: "5px",
            }}
          >
            FEATURE
          </button>
          <button
            style={{
              padding: "10px 20px",
              background: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            FEATURE
          </button>
        </div>

        {/* Map Image */}
        <div>
          <img
            src={Locationimg}
            alt="Property Location Map"
            style={{ width: "100%", borderRadius: "8px", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyLocation;
