import React from "react";
import "./Amenities.css";

// Import your images
import ami1 from "./productimage/ami1.png";
import ami2 from "./productimage/ami2.png";
import ami3 from "./productimage/ami3.png";
import ami4 from "./productimage/ami4.png";
import ami5 from "./productimage/ami5.png";
import ami6 from "./productimage/ami6.png";

const amenitiesData = [
  { name: "SOFAS", img: ami1 },
  { name: "CHAIRS", img: ami2 },
  { name: "TABLES", img: ami3 },
  { name: "TV BOARDS", img: ami4 },
  { name: "LIGHTINGS", img: ami5 },
  { name: "ACCESSORIES", img: ami6 },
];


const Amenities = () => {
  return (
    <section className="amenities-section">
      <h2 className="amenities-title">AMENITIES</h2>
      <div className="amenities-grid">
        {amenitiesData.map((item, index) => (
          <div key={index} className="amenity-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
