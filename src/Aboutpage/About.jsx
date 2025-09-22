import React from 'react';
import { useState } from 'react';
import Badge from './images/batch.svg';
import './About.css';
import Different from './Different';
import Works from './Works';
import Promise from './Promise';
import Showcase from './Showcase';
import Footer from '../mainpage/Footer';

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="a-col" >
        <div className="container">
          <nav
            className="navbar nav py-3"
            style={{
              backgroundColor: "transparent",
              position: "relative",
              zIndex: 2,
            }}>
            <div className="container-fluid px-5 d-flex  flex-wrap justify-content-between align-items-center"
              style={{ rowGap: "10px" }} >
              {/* Left side */}
              <div className="d-flex align-items-center gap-4 text-white-50">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-cart"></i>
                  <span>+75 6531 86 86</span>
                </div>
                <a href="#" className="text-white text-decoration-none fw-semibold">
                  3D TOUR
                </a>
              </div>

              {/* Center logo */}
              <h3
                className="m-0 text-white text-center flex-grow-1"
                style={{ fontFamily: "serif", whiteSpace: "nowrap" }}>

                HVYN <span style={{ color: "#d4b37f", fontStyle: "italic" }}>club</span>
              </h3>

              {/* Right side */}
              <div className="d-flex align-items-center gap-3 position-relative">
                <button className="btn btn-outline-light rounded-pill px-4">
                  CONTACT US
                </button>

                {/* Hamburger Button */}
                <div
                  onClick={() => setOpen(!open)}
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#d4b37f",
                    color: "#1b1b1b",
                    fontWeight: "bold",
                    cursor: "pointer",
                    userSelect: "none",
                  }}>
                  =
                </div>

                {/* Dropdown menu */}
                {open && (
                  <div
                    className="shadow rounded p-2"
                    style={{
                      position: "absolute",
                      top: "45px",
                      right: 0,
                      backgroundColor: "#fff",
                      zIndex: 10,
                      minWidth: "150px",
                    }}>
                    {["Product", "All Products", "Pricing", "About", "Contact Us"].map(
                      (item) => (
                        <a
                          key={item}
                          className="dropdown-item d-block"
                          href="#"
                          style={{ color: "#1b1b1b" }}
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        <h2 className='ab-head'>REDEFINING HOW UNDER-CONSTRUCTION</h2>
        <div className='building'></div>

        <div className="py-5 mini-box">
          <h2 className='head-2 text-center'>PROPERTIES ARE SHOWCASED</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              marginTop: "3rem",
            }}
          >
            {/* Mission */}
            <div
              style={{
                textAlign: 'left',
                color: "#fff",
                maxWidth: "300px",
                justifyContent: 'flex-start'
              }}
            >
              <img
                src={Badge} // <-- your badge image path
                alt="badge"
                style={{ width: "40px", marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontSize: "2rem",
                  letterSpacing: "2px",
                  marginBottom: "1rem",
                  fontFamily: "'Cinzel', serif",
                }}
              >
                MISSION
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                Enjoy modern amenities paired with classic charm for an exceptional stay.
              </p>
            </div>

            {/* Vision */}
            <div
              style={{
                textAlign: "center",
                color: "#fff",
                maxWidth: "300px",
              }}
            >
              <img
                src={Badge}
                alt="badge"
                style={{ width: "40px", marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontSize: "2rem",
                  letterSpacing: "2px",
                  marginBottom: "1rem",
                  fontFamily: "'Cinzel', serif",
                }}
              >
                VISION
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                Immerse yourself in tranquil landscapes and stunning natural views.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Different />
      <div className="how-it-works py-5">
        <Works />
      </div>
      <div className="combine py-5">
        <div className="container">
          <Promise />
        </div>
        <div className="container mt-5 mb-5">
          <Showcase />
        </div>
      </div>
      <div style={{
        marginTop:'15vh'
      }}>
      <Footer/>
      </div>
    </>
  )
}

export default About
