import React from 'react'
import Line from './images/line.png'
import Build from './images/building.png'
import './Showcase.css'

const Showcase = () => {
  return (
    <div className="showcase-section">
      {/* Left Decorative Line */}
      <img src={Line} alt="line" className="line-img" />

      {/* Center Text + Button */}
      <div className="showcase-content">
        <h2 className="showcase-heading">
          READY TO SHOWCASE <br /> YOUR PROPERTY?
        </h2>
        <button className="showcase-btn">REQUEST SHOWCASE</button>
      </div>

      {/* Right Building Illustration */}
      <img src={Build} alt="building" className="building-img" />
    </div>
  )
}

export default Showcase
