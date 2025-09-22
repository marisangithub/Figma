import React, { useState } from 'react'
import './Moveinghome.css'
import Nav from '../Nav'
import moveimg1 from './productimage/product1.png'
import moveimg2 from './productimage/product2.jpg'
import moveimg3 from './productimage/product3.jpg'
import moveimg4 from './productimage/product4.webp'


const Moveinghome = () => {
  const thumbnails = [moveimg1, moveimg2, moveimg3, moveimg4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeImage = thumbnails[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? thumbnails.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === thumbnails.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>

      <div className="image-container position-relative">
        <Nav  style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
    }}/>
        <img
          src={activeImage}
          alt="active"
          className="producthome rounded"
          style={{ height: "80vh", display: "block", objectFit: "cover",width:'100%',objectPosition:'center', marginBottom: "0px" }}
        />

        {/* Arrows (positioned at bottom center) */}
        <div className="arrow-controls productbtn position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-3">
          <button
            type="button"
            className="arrow-btn btn btn-dark rounded-circle"
            onClick={handlePrev}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            type="button"
            className="arrow-btn btn btn-dark rounded-circle"
            onClick={handleNext}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>


    </>
  )
}

export default Moveinghome
