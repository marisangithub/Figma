import React from "react";
import "./Floorplan.css";
import floorplanImg from "./productimage/floorplan.png"; 

const Floorplan = () => {
  return (
<div className="container mt-5">
        <section className="floorplan-section">
      <div className="floorplan-left">
        <h2 className="title">PLANS</h2>

        <div className="plan-tabs">
          <button className="tab">Penthouse</button>
          <button className="tab">Studio</button>
          <button className="tab">Duplex</button>
        </div>

        <div className="container">
            <ul className="plan-details">
          <li>
            <span>Total Area</span>
            <span>1080 SQFT</span>
          </li>
          <li>
            <span>Floor No.</span>
            <span>7th</span>
          </li>
          <li>
            <span>Current Status</span>
            <span>Available</span>
          </li>
          <li>
            <span>No. of Rooms</span>
            <span>04</span>
          </li>
          <li>
            <span>Parking Available</span>
            <span>Yes</span>
          </li>
          <li>
            <span>Price From</span>
            <span>$5400</span>
          </li>
        </ul>
        </div>
      </div>
 <div className="floorplan-right">
        <p className="intro-text text-secondary">
          Interior of volumes, space, air, proportion, with certain light and mood. <br />
          These interiors are meant to last forever. You need to be sure there <br />
          isn’t anything embarrassing hidden in the middle of text.
        </p>

        <img src={floorplanImg} alt="Floor Plan" className="floorplan-img mt-5" />
      </div>
    </section>
</div>
  );
};

export default Floorplan;
