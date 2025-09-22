import React, { useState } from "react";
import img1 from "../assets/Mainimage/why1.png";
import img2 from "../assets/Mainimage/why2.png";
import "./WhyChoose.css";

const WhyChoose = () => {
  const [active, setActive] = useState(1);

  const toggleImage = () => {
    setActive((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <div className="bg-dark py-5 align-item-center text-white"style={{height:'100vh'}}>
      <div className="container">
        <div className="row align-items-center" style={{marginTop:'23vh'}}>
          {/* LEFT TEXT */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">WHY <br /> CHOOSE  <br />HVYN CLUB?</h2>
            <p className="mb-4">
              Crafting an inviting Haven: Unveiling the Art of Designing a Cozy
              and Fresh Interior for Unmatched Comfort and Serenity.
            </p>
            <button className="btn btn-1">Get Started</button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="image-pill">
              <div
                className={`image left ${active === 1 ? "active" : "blurred"}`}
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div
                className={`image right ${active === 2 ? "active" : "blurred"}`}
                style={{ backgroundImage: `url(${img2})` }}
              ></div>

              <button
                className="arrow-btn-1"
                onClick={toggleImage}
                aria-label="Next Interior"
              >
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
