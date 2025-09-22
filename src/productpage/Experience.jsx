import React from "react";
import "./Experience.css";
import Feature1 from "./productimage/feature1.png";
import Feature2 from "./productimage/feature2.png";
import Feature3 from "./productimage/feature3.png";
import Feature4 from "./productimage/feature4.png";
import Feature5 from "./productimage/feature5.png";
import Feature6 from "./productimage/feature6.png";
import Swimming from './productimage/swimming.png';

const features = [
  { title: "Luxury Spa & Wellness", desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.", img: Feature1 },
  { title: "Fine Dining Restaurant", desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.", img: Feature2 },
  { title: "Luxury Spa & Wellness", desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.", img: Feature3 },
  { title: "Unlimited Free Wifi", desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.", img: Feature4 },
  { title: "Private Beach Access", desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.", img: Feature5 },
  { title: "Unlimited Free Wifi", desc: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible.", img: Feature6 }
];
const tabs = ["OVERVIEW", "DETAILS", "LOCATION", "LEGAL", "PAYMENT", "CONTACT"];
const Experience = () => {
  return (
    <>
    <div>
<nav className="experience-nav">
        {tabs.map((tab, index) => (
          <span
            key={index}
          >
          <a href ='' className="ancor">  {tab} </a>
          </span>
        ))}
      </nav>
    </div>
    <div className="experience">
      {/* Top section with heading */}
      <div className="experience-header">
        <h2 className="experience-title">
          EXPERIENCE WORLD-CLASS PROPERTIES
        </h2>
        <p className="experience-subtitle">
          Discover a world of elegance, personalized service, and to create he
          found himself transford.
        </p>
      </div>

      {/* Bottom row: left + right */}
      <div className="experience-content">
        <div className="thoughts-card">
          <h4>THOUGHTS</h4>
          <p>
            Host unforgettable celebrations and private <br /> 
            gatherings in a picturesque setting.
          </p>
        </div>

        <div className="experience-right">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.img} alt={feature.title} />
              <h5>{feature.title}</h5>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

<div
  style={{
    color: "green",
    height: "5vh",
    fontFamily: "serif",
    fontSize: "2rem",
    display: "flex",      
    gap: '40px',
    padding:'0 30px',
    alignItems: "center",    
    justifyContent: "space-around", 

  }}
>
  #VillaMyLuxury | #ExperienceElegance | #UnforgettableMoments
</div>
<img src={Swimming} alt=""
style={{
  width:'100%',
  height:'100vh'
}} />
    </>
  );
};

export default Experience;
