import React from 'react'
import Nav from '../Nav';
import './Contact.css';
import Showcase from '../Aboutpage/Showcase';
import Footer from '../mainpage/Footer'

const Contact = () => {
  return (
    <>
      <div className="contactbg">
        <Nav/>
      </div>
      <div className="contactpage2 d-col py-5">
             <div className="contact-container p-5">
      {/* Left Side */}
      <div className="contact-info p-5 mt-5 mb-5">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien
          sem, egestas feugiat finibus ac, dapibus vitae metus.
        </p>

        <div className="info-block">
          <h4>GENERAL ENQUIRIES</h4>
          <p>+01 236507 25345</p>
          <p>email@company.com</p>
        </div>

        <div className="info-block">
          <h4>BUSINESS HOURS</h4>
          <p>Monday to Friday - 9 AM to 5 PM</p>
          <p>Closed on weekends and holidays</p>
        </div>

        <div className="info-block">
          <h4>PROPERTY AGENT ENQUIRIES</h4>
          <p>+01 236507 25345</p>
          <p>email@company.com</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-form p-5 mt-5 mb-5">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="example@email.com" />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter your company name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 201-555-0123" />
          </div>

          <div className="form-group">
            <label>Choose the solution that best fits your need:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="solution" /> Solution 1
              </label>
              <label>
                <input type="radio" name="solution" /> Solution 2
              </label>
            </div>
          </div>

          <div className="form-group">
            <textarea placeholder="Please provide a short description"></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
          <p className="form-note">
            By pressing the submit button, I agree to contacting me by email
            and/or phone
          </p>
        </form>
      </div>
    </div>
</div>

{/* pg3 */}

<div className="pg3">
    <div className="addresscard p-5">
        <h2 className='cardhead '> See us in Dubai</h2>
        <p className='mt-3 '>Address</p>
    </div>
</div>
         <div 
    className="showcase-wrapper position-absolute " 
    style={{zIndex: 2, }}
  >
    <Showcase />
  </div>

<div style={{backgroundColor:'#D4B484', height:'40vh'}}></div>

<Footer />


    </>
  )
}

export default Contact
