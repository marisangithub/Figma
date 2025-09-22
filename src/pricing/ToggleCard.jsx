import React, { useState } from "react";

const ToggleCard = ({ title, description }) => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="d-flex align-items-start gap-2">
      {/* Toggle */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          style={{ accentColor: "#d35400" }} // orange toggle
        />
      </div>

      {/* Texts */}
      <div>
        <p className="m-0 fw-semibold">{title}</p>
        <small className="text-muted">{description}</small>
      </div>
    </div>
  );
};

export default ToggleCard;
