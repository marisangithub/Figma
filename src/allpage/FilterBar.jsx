import React, { useState } from "react";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    filter1: "",
    filter2: "",
    filter3: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ filter1: "", filter2: "", filter3: "" });
  };

  return (
    <div
      style={{
        backgroundColor: "#f9ebdd",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* Filter 1 */}
      <select
        name="filter1"
        value={filters.filter1}
        onChange={handleChange}
        style={{
          padding: "8px",
          minWidth: "180px",
          border: "none",
          borderBottom: "2px solid #aaa",
          background: "transparent",
          outline: "none",
        }}
      >
        <option value="">Filter</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* Filter 2 */}
      <select
        name="filter2"
        value={filters.filter2}
        onChange={handleChange}
        style={{
          padding: "8px",
          minWidth: "180px",
          border: "none",
          borderBottom: "2px solid #aaa",
          background: "transparent",
          outline: "none",
        }}
      >
        <option value="">Filter</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* Filter 3 */}
      <select
        name="filter3"
        value={filters.filter3}
        onChange={handleChange}
        style={{
          padding: "8px",
          minWidth: "180px",
          border: "none",
          borderBottom: "2px solid #aaa",
          background: "transparent",
          outline: "none",
        }}
      >
        <option value="">Filter</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        style={{
          padding: "8px 20px",
          backgroundColor: "#d6af78",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default FilterBar;
