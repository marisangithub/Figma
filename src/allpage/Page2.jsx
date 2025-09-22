import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import cardimg1 from "./image/1stcard.png";
import cardimg2 from "./image/2ndcard.png";
import cardimg3 from "./image/3rdcard.png";
import cardimg4 from "./image/4thcard.png";
import Allmap from "./image/allmap.png";

const Card = ({ img, title, subtitle }) => {
  return (
    <div style={{ borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
      {/* Image as background */}
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "350px", // adjust as needed
          color: "#fff",
          marginBottom: "10px", // <-- gap before footer
        }}
      >
        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
          }}
        ></div>

        {/* Top-left text */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "0.5px",
          }}
        >
          FROM 69.74M
        </div>

        {/* Top-right arrow */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "rgba(255,255,255,0.9)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
          }}
        >
          <FiArrowUpRight size={18} />
        </div>

        {/* Bottom text */}
        <div
          style={{
            position: "absolute",
            bottom: "15px",
            left: "15px",
            right: "15px",
          }}
        >
          <p style={{ fontSize: "12px", margin: "0 0 6px" }}>{subtitle}</p>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>
            {title}
          </h2>
        </div>
      </div>

      {/* Footer bar (separate with gap) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#000",
          color: "#fff",
          padding: "8px 12px",
          fontSize: "14px",
          borderRadius: "6px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FaBed /> 2 Bedrooms
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FaBath /> 1 Bathroom
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <FaRulerCombined /> 1458 sqft
        </span>
      </div>
    </div>
  );
};



const Page2 = () => {
  return (
<div className="container mt-5">
        <section style={{ display: "flex", padding: "20px", gap: "20px" }}>
      {/* Left side - Cards */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <Card
          img={cardimg1}
          title="HOME, ELEVATED"
          subtitle="A GOOD HOME WORKSPACE STARTS WITH THE RIGHT FURNITURE"
        />
        <Card
          img={cardimg2}
          title="WINTER WARM"
          subtitle="DISCOVER OUR LATEST COLLECTION WITH LUXURY RUGS & MORE"
        />
        <Card
          img={cardimg3}
          title="HOME, ELEVATED"
          subtitle="A GOOD HOME WORKSPACE STARTS WITH THE RIGHT FURNITURE"
        />
        <Card
          img={cardimg4}
          title="WINTER WARM"
          subtitle="DISCOVER OUR LATEST COLLECTION WITH LUXURY RUGS & MORE"
        />
      </div>

      {/* Right side - Map */}
      <div style={{ flex: 1 }}>
        <img
          src={Allmap}
          alt="map"
          style={{ width: "100%", borderRadius: "10px",height:'105vh' }}
        />
      </div>
    </section>
</div>
  );
};

export default Page2;
