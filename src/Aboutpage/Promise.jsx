import React from "react";
import Point from "./images/point.png";
import Flower from "./images/flower.png";
import "./Promise.css";

const Promise = () => {
  return (
    <section className="promise-section">
      {/* Left Side */}
      <div className="promise-left">
        <h2 className="promise-heading">
          OUR <span>PROMISE</span>
        </h2>

        <ul className="promise-list">
          <li>
            <img src={Point} alt="point" className="point-icon" />
            <div>
              <strong>To Buyers</strong>
              <p>Everyone listing is real, verified, and transparent.</p>
            </div>
          </li>
          <li>
            <img src={Point} alt="point" className="point-icon" />
            <div>
              <strong>To Owners</strong>
              <p>Everyone listing is real, verified, and transparent.</p>
            </div>
          </li>
          <li>
            <img src={Point} alt="point" className="point-icon" />
            <div>
              <strong>To The Market</strong>
              <p>Everyone listing is real, verified, and transparent.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="promise-right">
        <img src={Flower} alt="flower" className="flower-img" />
      </div>
    </section>
  );
};

export default Promise;
