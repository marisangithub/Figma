import React from 'react'
import { useState } from 'react'
import Contact from './contactpage/Contact';
import { Route,Routes,Link } from 'react-router-dom';

const Nav = () => {
const [open, setOpen] = useState(false);
  return (
    <>
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
                               <Link to='/contact'> <button className="btn btn-outline-light rounded-pill px-4">
                                    CONTACT US
                                </button></Link>

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
                <Routes>
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
      
    </>
  )
}

export default Nav
