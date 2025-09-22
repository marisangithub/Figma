import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './Home.css'
import FeaturedGallery from './FeaturedGallery'
import BrowseByLocality from "./BrowseByLocality";
import BrowseByLifestyle from "./BrowseByLifestyle";
import RecentlyAdded from "./RecentlyAdded";
import WhyChoose from "./WhyChoose";
import ExploreSection from "./ExploreSection";
import Footer from './Footer';
import Dubai1 from '../assets/Mainimage/Dubai1.avif'
import Dubai2 from '../assets/Mainimage/dubai2.avif'
import Prop1 from "../assets/Mainimage/prop1.png";
import Prop2 from "../assets/Mainimage/prop2.jpg";
import Prop3 from "../assets/Mainimage/prop3.jpg";
import Prop4 from "../assets/Mainimage/prop4.jpg";
import Styleimage from "../assets/Mainimage/image.png";
import About from '../Aboutpage/About';

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <>

            <div className="hero-section" style={{ zIndex: 2 }}>
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

                    <h2 className='big-text'>EXCLUSIVE <br />UNDER-CONSTRUCTION <br />PROPERTIES IN DUBAI</h2>
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "-30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 3,
                        width: "80%",
                        maxWidth: "1200px",
                        height: '150px'
                    }}>
                    <div className="shadow-lg rounded-3 p-4 bg-white">
                        <h6 className="mb-3 fw-semibold text-secondary">
                            DISCOVER YOUR PERFECT SPACE
                        </h6>

                        <div className="row g-3 mt-3">
                            <div className="col-md">
                                <select className="form-select">
                                    <option>Property Type</option>
                                </select>
                            </div>
                            <div className="col-md">
                                <select className="form-select">
                                    <option>Transaction Type</option>
                                </select>
                            </div>
                            <div className="col-md">
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className="col-md">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Rooms and Amenities"
                                />
                            </div>
                        </div>

                        <div className="col-auto ms-auto d-flex gap-2 mt-3" style={{
                            justifyContent: 'flex-end'
                        }}>
                            <button className="btn btn-outline-dark mt-3">LIST YOUR PROPERTY</button>
                            <button className="btn btn-dark mt-3">DISCOVER NOW →</button>
                        </div>
                    </div>
                </div>
                {/* page2 */}
                <div className="text-white d-block g-col pg-bg" style={{ backgroundColor: "#424242ff", width: '100%' }}>
                    <div
                        className="position-relative py-5"
                        style={{ backgroundColor: " #1c2124", height: '130vh', color: "white", marginTop: '40vh', marginLeft: '10vh' }}
                    >
                        <div className="container">
                            <div className="text-left  mb-5 mt-5 ml-5">
                                <h2
                                    className=" text-left"
                                    style={{
                                        fontFamily: " serif",
                                        fontSize: "2.5rem",
                                        textTransform: "uppercase",
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <span style={{ color: "#d4b37f" }}>Premium Class Apartments</span>
                                    <br />
                                    <span style={{ color: "white", fontWeight: 400 }}>
                                        With Five Stars Hotel Services <br />In Your Home
                                    </span>
                                </h2>
                            </div>

                            <div className="d-flex justify-content-center align-items-start ml-5 position-relative">
                                <div className="position-relative me-5 mt-5 ml-5">
                                    <img
                                        src={Dubai1}
                                        alt="Dubai 1"
                                        className="shadow-lg rounded-3"
                                        style={{
                                            width: "260px",
                                            height: "360px",
                                            objectFit: "cover",
                                            transform: "rotate(-5deg)",
                                            zIndex: 2,
                                        }}
                                    />
                                    <img
                                        src={Dubai2}
                                        alt="Dubai 2"
                                        className="shadow-lg rounded-3 position-absolute"
                                        style={{
                                            width: "260px",
                                            height: "360px",
                                            objectFit: "cover",
                                            right: "-120px",
                                            top: "50px",
                                            transform: "rotate(5deg)",
                                            zIndex: 1,
                                        }}
                                    />
                                </div>

                                <div className="ms-5 mt-5" style={{ maxWidth: "500px", textTransform: 'uppercase' }}>
                                    <p className="mb-4" style={{ marginLeft: '20vh', color: "#d4b37f" }}>
                                        archin rising above <br />THE urbanLANDSCAPE <br />and becomes A VISIBLE <br />METAPHOR FOR THE <br />DIZZYING SUCCESS OF <br />ITS INHABITANTS.
                                        Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.
                                    </p>
                                    <Link to='/about' className={"btn btn-outline-light btn-abo px-4 rounded-pill"} style={{ marginLeft: '20vh' }}>
                                        ABOUT HVYN
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* pgfeatured properties */}
                    <div className="text-white container py-5">
                        <div className="row">
                            <div className="col-6">
                                <h2
                                    className="fw-bold text-center"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "2.5rem",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    <span style={{ color: "#d4b37f" }}>FEATURED</span>
                                    <br />
                                    <span>PROPERTIES</span>
                                </h2>
                            </div>
                            <div className="col-6">
                                <p style={{ color: "#d4b37f", textTransform: "uppercase" }}>
                                    A thousand and one ways to treat <br />
                                    yourself and the ones you love — <br />
                                    on hand whenever you want.
                                </p>
                            </div>
                        </div>

                        <FeaturedGallery images={[Prop1, Prop2, Prop3, Prop4]} />

                        <div className="row mt-5">
                            {[
                                ["5,265", "Square Meter <br/> Areas"],
                                ["924", "Spacious Modern  <br/>  Apartments"],
                                ["1,264", "Slot Car Parking Indoor <br/> and Outdoor"],
                            ].map(([num, label]) => (
                                <div className="col-md-4 d-flex" key={num}>
                                    <h2
                                        style={{
                                            color: "#d4b37f",
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: "600",
                                        }}
                                    >
                                        {num}
                                    </h2>
                                    <p className="text-uppercase small mb-0 text-secondary ms-2"
                                        dangerouslySetInnerHTML={{ __html: label }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#1b1b1b", color: "white", height:'300vh'}}>
                    <RecentlyAdded />
                    <div className="position-relative">
                        <img
                            src={Styleimage}
                            alt="stylish background"
                            className="position-absolute top-0 end-0"
                            style={{
                                height: "100%",
                                width: "50%",
                                objectFit: "cover",
                                zIndex: 1,
                                opacity: 0.2,
                                pointerEvents: "none",
                            }}
                        />
                        <div className="position-relative" style={{ zIndex: 2 }}>
                            <BrowseByLocality />
                        </div>
                    </div>
                    <BrowseByLifestyle />
                </div>

                <WhyChoose />

                <div
                    className="py-5"
                    style={{ backgroundColor: "#1b1b1b", color: "white" }}
                >
                    <ExploreSection />
                </div>
            </div>
            <Footer />
<Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<About/>}/>
</Routes>
        </>
    );
}

export default Home;