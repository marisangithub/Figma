import React from 'react';
import { useState } from 'react';
import './Pricing.css';
import '../Aboutpage/works.css'
import Works from '../Aboutpage/Works';
import Showcase from '../Aboutpage/Showcase'
import Footer from '../mainpage/Footer'
import TogglesGrid from './TogglesGrid';

const Pricing = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="pricing-bg">
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
            </div>
            <div className="py-5 bg-dark text-light p-5">
                <div className="container text-center">
                    {/* Title */}
                    <h2 className="fw-bold mt-5 mb-5">Packages Available</h2>
                    <p className="text-secondary mt-2">
                        Choose from a wide range of plans that suit your needs
                    </p>

                    {/* Billing toggle */}
                    <div className="d-flex justify-content-center mb-5">
                        <div
                            className="d-flex align-items-center p-1"
                            style={{
                                backgroundColor: "white",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                            }}
                        >
                            <button
                                className="btn btn-sm d-flex align-items-center text-dark"
                                style={{ backgroundColor: "white", border: "none" }}
                            >
                                Bill yearly
                                <span
                                    className="badge ms-2"
                                    style={{
                                        backgroundColor: "#e6f9f0",
                                        color: "#198754",
                                        fontSize: "0.75rem",
                                    }}
                                >
                                    -15%
                                </span>
                            </button>
                            <button
                                className="btn btn-sm text-orange"
                                style={{
                                    border: "1px solid #d35400",
                                    backgroundColor: "#fff5f0",
                                    color: "#d35400",
                                    fontWeight: "500",
                                }}
                            >
                                Bill monthly
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="row g-4 justify-content-center">
                        {/* Card 1 */}
                        <div className="col-md-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <div className="card-body text-dark">
                                    <h6 className="text-secondary">Name</h6>
                                    <h2 className="fw-bold">
                                        $19 <small className="fs-6">/user/month</small>
                                    </h2>
                                    <p className="text-secondary">
                                        Aenean et lectus posuere enim id nec. Molestie neque, sed
                                        fusce faucibus.
                                    </p>
                                    <ul className="list-unstyled text-start">
                                        {Array(6)
                                            .fill(
                                                "Tortor interdum condimentum nunc molestie quam lectus."
                                            )
                                            .map((item, i) => (
                                                <li key={i} className="mb-2">
                                                    ✅ {item}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <button className="btn btn-outline-dark w-100 rounded-pill">
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 (Highlighted) */}
                        <div className="col-md-4 mb-5">
                            <div className="card h-100 shadow border-primary border-2">
                                <div className="card-body text-dark">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-secondary">Name</h6>
                                        <span className="badge bg-warning text-dark">
                                            🔥 Most popular
                                        </span>
                                    </div>
                                    <h2 className="fw-bold">
                                        $39 <small className="fs-6">/user/month</small>
                                    </h2>
                                    <p className="text-secondary">
                                        Aenean et lectus posuere enim id nec. Molestie neque, sed
                                        fusce faucibus.
                                    </p>
                                    <ul className="list-unstyled text-start">
                                        {Array(6)
                                            .fill(
                                                "Tortor interdum condimentum nunc molestie quam lectus."
                                            )
                                            .map((item, i) => (
                                                <li key={i} className="mb-2">
                                                    ✅ {item}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <button className="btn btn-warning w-100 rounded-pill">
                                        Get started →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <div className="card-body text-dark">
                                    <h6 className="text-secondary">Name</h6>
                                    <h2 className="fw-bold">Custom pricing</h2>
                                    <p className="text-secondary">
                                        Aenean et lectus posuere enim id nec. Molestie neque, sed
                                        fusce faucibus.
                                    </p>
                                    <ul className="list-unstyled text-start">
                                        {Array(6)
                                            .fill(
                                                "Tortor interdum condimentum nunc molestie quam lectus."
                                            )
                                            .map((item, i) => (
                                                <li key={i} className="mb-2">
                                                    ✅ {item}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <button className="btn btn-outline-dark w-100 rounded-pill">
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Compare Packages Section */}
            <div className="py-5 d-col text-light">
                <div className="container text-center">
                    <h2 className="fw-bold mb-5">Compare Packages</h2>

                    <div className="table-responsive">
                        <table
                            className="table align-middle table-borderless text-center text-light"
                            style={{ backgroundColor: "#1c2124" }}
                        >
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: "#1c2124" }}></th>
                                    <th style={{ backgroundColor: "#1c2124" }}>
                                        <h5 className='text-white' >Free</h5>
                                        <p className="text-secondary small">Aenean at lectus posuere enim id nec. <br /> Molestie neque, sed fusce faucibus.</p>
                                        <h3>$0</h3>
                                        <p className="text-secondary ">/user /month</p>
                                        <button className="btn btn-outline-light rounded-pill px-4">
                                            Get started
                                        </button>
                                    </th>
                                    <th style={{ backgroundColor: "#1c2124" }}>
                                        <h5 className='text-white'>
                                            Premium <span className="badge bg-danger ms-2">Most popular</span>
                                        </h5>
                                        <p className="text-secondary small">Aenean at lectus posuere enim id nec. <br /> Molestie neque, sed fusce faucibus.</p>
                                        <h3>$39</h3>
                                        <p className="text-secondary tb-txtcol">/user /month</p>
                                        <button className="btn btn-warning text-dark rounded-pill px-4">
                                            Get started →
                                        </button>
                                    </th>
                                    <th style={{ backgroundColor: "#1c2124" }}>
                                        <h5 className='text-white'>Business</h5>
                                        <p className="text-secondary  small">Aenean at lectus posuere enim id nec. <br /> Molestie neque, sed fusce faucibus.</p>
                                        <h3>Custom pricing</h3>
                                        <button className="btn btn-outline-light rounded-pill px-4">
                                            Contact us
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-start" style={{ backgroundColor: "#1c2124", color: 'white' }}>Feature 1</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                </tr>

                                <tr>
                                    <td className="text-start" style={{ backgroundColor: "#1c2124", color: 'white' }}>Feature 2</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                </tr>

                                <tr>
                                    <td className="text-start" style={{ backgroundColor: "#1c2124", color: 'white' }}>Feature 3</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                </tr>

                                <tr>
                                    <td className="text-start" style={{ backgroundColor: "#1c2124", color: 'white' }}>Feature 4</td>
                                    <td style={{ backgroundColor: "#1c2124" }}></td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                </tr>

                                <tr>
                                    <td className="text-start" style={{ backgroundColor: "#1c2124", color: 'white' }}>Feature 5</td>
                                    <td style={{ backgroundColor: "#1c2124" }}></td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                    <td className="tick-green" style={{ backgroundColor: "#1c2124" }}>✓</td>
                                </tr>
                                <tr>
                                    <td className="text-start" style={{ backgroundColor: "#1c2124", color: 'white' }}>Usage</td>
                                    <td style={{ backgroundColor: "#1c2124", color: 'white' }}>1,000 /mo</td>
                                    <td style={{ backgroundColor: "#1c2124", color: 'white' }}>2,000 /mo</td>
                                    <td style={{ backgroundColor: "#1c2124", color: 'white' }}>Unlimited</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className='addonspg'>
                <div className="container">
                    <h2 className='headp text-center'>
                        Addons ForYour Listing
                    </h2>
                    <TogglesGrid />
                </div>
            </div>
    <div className="how-it-works py-5 position-relative" style={{ paddingBottom: "200px",backgroundColor:'#1c2124',height:'130vh' }}>
  <Works />

  <div 
    className="showcase-wrapper position-absolute start-50 translate-middle-x" 
    style={{ bottom: "-200px", zIndex: 2 }}
  >
    <Showcase />
  </div>
</div>
<div style={{backgroundColor:'#D4B484', height:'20vh'}}></div>

<Footer />



        </>
    )
}

export default Pricing
