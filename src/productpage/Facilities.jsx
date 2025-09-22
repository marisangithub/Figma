import React from "react";
import "./Facilities.css";

// Dummy icons (replace with your own SVGs or images)
import { FaBath, FaBrush, FaTable, FaMountain } from "react-icons/fa";

const facilities = [
  { icon: <FaMountain />, title: "PANORAMIC WINDOWS" },
  { icon: <FaBath />, title: "MULTIPLE BATHROOMS" },
  { icon: <FaTable />, title: "PRIVATE TERRACE" },
  { icon: <FaBrush />, title: "DESIGNER FINISHING" },
  { icon: <FaMountain />, title: "PANORAMIC WINDOWS" },
  { icon: <FaBath />, title: "MULTIPLE BATHROOMS" },
  { icon: <FaTable />, title: "PRIVATE TERRACE" },
  { icon: <FaBrush />, title: "DESIGNER FINISHING" },
];

const Facilities = () => {
  return (
 
     <section className="facilities-section">
      {/* Left title */}
      
      <div className="facilities-left">
        <h2>FACILITIES</h2>
      </div>

      {/* Right grid */}
<div className="facilitypg">
          <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">{facility.icon}</div>
            <p>{facility.title}</p>
          </div>
        ))}
      </div>
</div>

    </section>
 
  );
};

export default Facilities;
