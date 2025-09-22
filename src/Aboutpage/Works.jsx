import React from "react";
import './works.css'
import { FaRegUserCircle, FaBuilding, FaThLarge, FaClipboardList } from "react-icons/fa";

const Works = () => {
  const steps = [
    {
      icon: <FaRegUserCircle size={30} />,
      title: "Get Started",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien sem, egestas feugiat finibus ac.",
    },
    {
      icon: <FaBuilding size={30} />,
      title: "Add Property",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien sem, egestas feugiat finibus ac.",
    },
    {
      icon: <FaThLarge size={30} />,
      title: "Choose Package",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien sem, egestas feugiat finibus ac.",
    },
    {
      icon: <FaClipboardList size={30} />,
      title: "Publish Listing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien sem, egestas feugiat finibus ac.",
    },
  ];

  return (
  <>
<div className="container text-center align-item-center mt-5">
    <div className="margin">
    <h2 style={{
        fontSize:'4rem',
        marginBottom:'4vh'
    }}>How it work</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="step-box p-4">
                <div className="icon mb-3">{step.icon}</div>
                <h5 className="mb-2">{step.title}</h5>
                <p className="justification">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-start mt-4">GET STARTED</button>
        </div>
</div>
        </>
  );
};

export default Works;
