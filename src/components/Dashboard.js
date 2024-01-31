import React, { useState } from "react";
import IndiaMap from "./IndiaMap"; // Assuming you have a separate IndiaMap component
import mockData from "./mockData"; // Assuming you have a separate mockData file

const Dashboard = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Mock data based on selected state and district
  const crimeData = mockData[selectedState]?.[selectedDistrict] || {};

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-gray-900 text-white ${darkMode ? "dark" : ""}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <h1 className="text-2xl font-semibold">Crime Dashboard</h1>
          <p className="mb-2">Select your State and District:</p>
          {/* Add your state and district selection logic here */}
          {/* For simplicity, using a simple text input for now */}
          <input
            type="text"
            placeholder="Enter State"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="p-2 mb-2 bg-gray-800 rounded"
          />
          <input
            type="text"
            placeholder="Enter District"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="p-2 mb-2 bg-gray-800 rounded"
          />
        </div>
        <div className="flex items-center">
          <label className="switch mr-2">
            <input type="checkbox" onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>
      {/* Display crime statistics based on the selected state and district */}
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Crime Statistics</h2>
        {/* Display your crime statistics here based on crimeData */}
        <p>Total Crimes: {crimeData.totalCrimes || 0}</p>
        <p>Violent Crimes: {crimeData.violentCrimes || 0}</p>
        {/* Add more crime statistics based on your data */}
      </div>
      {/* Display the interactive map of India */}
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Interactive Map</h2>
        <IndiaMap />
      </div>
    </div>
  );
};

export default Dashboard;
