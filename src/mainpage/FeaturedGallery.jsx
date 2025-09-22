import React, { useState } from "react";
import Prop1 from "../assets/Mainimage/prop1.png";
import Prop2 from "../assets/Mainimage/prop2.jpg";
import Prop3 from "../assets/Mainimage/prop3.jpg";
import Prop4 from "../assets/Mainimage/prop4.jpg";

const FeaturedGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [Prop1, Prop2, Prop3, Prop4];

  return (
    <div
      className="mt-5"
      style={{
        display: "flex",
        height: "400px",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      {images.map((img, index) => {
        const isActive = activeIndex === index;

        // color: yellow for the one just after active, gray for others
        const inactiveColor =
          index === (activeIndex + 2) % images.length ? "#B39977" : "#373E43";

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              flex: isActive ? 4 : 0.5,
              background: isActive
                ? `url(${img}) center/cover no-repeat`
                : inactiveColor,
              cursor: "pointer",
              transition: "flex 0.5s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              fontFamily: "serif",
            }}
          >
            {!isActive && (
              <>
                <div style={{ fontSize: "2rem", marginTop: "10px" }}>
                  {index + 1}
                </div>
                <div
                  style={{
              marginBottom: "10px",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              opacity: 0.8,
              writingMode: 'vertical-rl'
                  }}
                >
                  FEATURED
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedGallery;
