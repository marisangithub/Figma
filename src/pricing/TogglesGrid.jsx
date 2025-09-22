import React from "react";
import ToggleCard from "./ToggleCard";

const TogglesGrid = () => {
  const items = [
    { title: "Custom Renders Of Views", description: "Description of what this control will do" },
    { title: "Custom Renders Of Views", description: "Description of what this control will do" },
    { title: "Custom Renders Of Views", description: "Description of what this control will do" },
    { title: "Custom Renders Of Views", description: "Description of what this control will do" },
    { title: "Custom Renders Of Views", description: "Description of what this control will do" },
    { title: "Custom Renders Of Views", description: "Description of what this control will do" }
  ];

  return (
    <div className="container py-4">
      <div className="row mt-5" style={{
        gap:'20'
      }}>
        {items.map((item, i) => (
          <div className="col-md-4 col-lg-3  mt-5" style={{gap:'50px', marginLeft:'50px'}} key={i}>
            <ToggleCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TogglesGrid;
