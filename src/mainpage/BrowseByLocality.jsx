import React, { useState } from "react";
import "./BrowseByLocality.css";
import Styleimage from "../assets/Mainimage/image.png";
import thumb1 from "../assets/Mainimage/locality1.png";
import thumb2 from "../assets/Mainimage/locality.jpg";
import thumb3 from "../assets/Mainimage/locality3.JPG";
import thumb4 from "../assets/Mainimage/locality4.jpg";
import thumb5 from "../assets/Mainimage/locality5.png";

const BrowseByLocality = () => {
  const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeImage = thumbnails[currentIndex];

  const handlePrev = (e) => {
    setCurrentIndex((prev) =>
      prev === 0 ? thumbnails.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    setCurrentIndex((prev) =>
      prev === thumbnails.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-dark text-light py-5" style={{ marginRight: "50px" }}>
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className="fw-semibold text-uppercase">
              Browse by <br /> Locality
            </h2>
          </div>
          <div className="col-md-6">
            <p className="text-color-white small">
              Together, we can conquer challenges, utilize our strengths,
              and achieve remarkable success in this ambitious home project.
            </p>
          </div>
        </div>

        {/* Main image */}
        <div className="card border-0 rounded-5 overflow-hidden">
          <img src={activeImage} className="main-img" alt="Locality" style={{height:'400px'}} />
        </div>

        <div className="d-flex align-items-center mt-4 locality-row">
  {/* Left */}
  <div className="me-3">
    <h5 className="mb-1">LOCALITY {currentIndex + 1}</h5>
    <p className="text-secondary small mb-0">25 Properties</p>
  </div>

  {/* Center */}
  <div className="thumbnails-row">
    {thumbnails.map((thumb, index) => (
      <button
        key={index}
        type="button"
        className={`border-0 rounded-circle overflow-hidden p-0 ${
          currentIndex === index ? "border border-3 border-light" : ""
        }`}
        style={{
          width: "56px",
          height: "56px",
          cursor: "pointer",
        }}
        onClick={() => setCurrentIndex(index)}
      >
        <img src={thumb} className="w-100 h-100 object-fit-cover" alt="" />
      </button>
    ))}
  </div>

  {/* Right */}
  <div className="d-flex gap-2 ms-auto">
    <button
      type="button"
      className="arrow-btn btn btn-outline-light rounded-circle"
      onClick={handlePrev}
    >
     <i className="bi bi-arrow-left"></i>
    </button>
    <button
      type="button"
      className="arrow-btn btn btn-outline-light rounded-circle"
      onClick={handleNext}
    >
     <i className="bi bi-arrow-right"></i>
    </button>
  </div>
</div>



      </div>

    </section>
  );
};

export default BrowseByLocality;
