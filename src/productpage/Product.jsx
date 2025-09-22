import React from 'react'
import './Product.css'
import Moveinghome from './Moveinghome'
import car1 from './productimage/ca1.svg'
import Experience from './Experience'
import Floorplan from './Floorplan'
import Facilities from './Facilities'
import Amenities from './Amenities'
import PropertyLocation from './PropertyLocation'
import PropertyLegalDetails from './PropertyLegalDetails'
import PricingPayment from './PricingPayment'
import Message from './Message'
import Footer from '../mainpage/Footer'

const Product = () => {
    return (
        <>
            <Moveinghome />
            <div className="g-col py-5" style={{
                height: '40vh'
            }}>

                <div className="d-col py-5" style={{
                    height: '39vh',
                    width: '95%',
                    marginLeft: '5%',
                    position: 'absolute',
                    bottom: '-115px'
                }}>
                    <h2 style={{
                        color: "#d4b37f",
                        fontFamily: "serif",
                        zIndex: 3,
                        fontSize: '3rem',
                        position: 'absolute',
                        bottom: '210px',
                        marginLeft: '80px'
                    }}>
                        PROPERTY <br /> <span className='text-white'>NAME</span></h2>
                    <p style={{
                        color: "#d4b37f",
                        textTransform: 'uppercase',
                        marginTop: '70px',
                        marginLeft: '80px'
                    }}>archin rising above <br />
                        THE urbanLANDSCAPE <br />
                        and becomes A VISIBLE <br />
                        METAPHOR FOR THE <br />
                        DIZZYING SUCCESS OF <br />
                        ITS INHABITANTS.</p>
                    <div className="property-card" style={{ right: '-50vh', top: '-50vh' }}>
                        {/* Badge */}
                        <span className="badge">NEW</span>

                        {/* Property Image */}
                        <img
                            src={car1}
                            alt="Property"
                            className="property-image"
                        />

                        {/* Title */}
                        <h3 className="property-title">PROPERTY NAME</h3>

                        {/* Button */}
                        <button className="enquire-btn">ENQUIRE</button>
                    </div>
                </div>
            </div>
           <Experience/>
           <Floorplan/>
           <Facilities/>
           <Amenities/>
           <PropertyLocation/>
           <PropertyLegalDetails/>
           <PricingPayment/>
           <Message/>
           <Footer/>
        </>
    )
}

export default Product