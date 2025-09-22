import React from "react";
import build from "./productimage/building.png";
import design from "./productimage/line.png";

const Message = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#2b2f32",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        boxSizing: "border-box",
        
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          height: "50vh",
          backgroundColor: "#1d1f21",
          color: "white",
          borderRadius: "6px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        <h2 style={{ fontSize: "28px", lineHeight: "1.4", marginBottom: "30px" }}>
          LET’S BOOK YOUR <br /> APPOINTMENT WITH US NOW
        </h2>

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#c4c4c4",
            }}
          ></div>
          <div>
            <p style={{ margin: 0, fontWeight: "bold" }}>Rachel Thompson</p>
            <p style={{ margin: "2px 0", fontSize: "14px" }}>Contact Number:</p>
            <p style={{ margin: "2px 0", fontSize: "14px" }}>Email:</p>
          </div>
        </div>

        {/* Images at bottom */}
        <img
          src={design}
          alt="line design"
          style={{ position: "absolute", bottom: "0", left: "0", width: "10px" }}
        />
        <img
          src={build}
          alt="building"
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "300px",
            height:'300px',
            objectFit: "contain",
          }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          width: "420px", // fixed like screenshot
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "-2vh", // slight overlap upwards
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>SEND US A MESSAGE</h2>
        <p style={{ marginBottom: "20px", color: "#555", fontSize: "14px" }}>
          Our expert will get back to you as soon as we can
        </p>
        <hr style={{ marginBottom: "20px", border: "0", borderTop: "1px dotted #aaa" }} />

        <form style={{ display: "flex", flexDirection: "column", gap: "15px", flex: 1 }}>
          <input type="text" placeholder="Contact name" style={inputStyle} />
          <input type="text" placeholder="Street" style={inputStyle} />

          <div style={{ display: "flex", gap: "10px" }}>
            <input type="text" placeholder="City" style={{ ...inputStyle, flex: 1 }} />
            <input type="text" placeholder="Postcode" style={{ ...inputStyle, flex: 1 }} />
          </div>

          <input type="text" placeholder="Contact Phone" style={inputStyle} />
          <input type="email" placeholder="E-mail" style={inputStyle} />
          <input type="text" placeholder="Let's talk about your property" style={inputStyle} />

          <button
            type="submit"
            style={{
              marginTop: "20px",
              backgroundColor: "black",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  border: "none",
  borderBottom: "1px solid #ccc",
  padding: "10px",
  fontSize: "14px",
  outline: "none",
};

export default Message;
