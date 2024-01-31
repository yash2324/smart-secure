// Home.js

import React from "react";

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <div className="w-full py-96 grid grid-cols-2 grid-rows-2 bg-black">
        <h2 className="font-bold ml-2 my-4 text-2xl bg-black text-white">
          SmartSecure
        </h2>
        <p className="ml-2 grid- text-white">
          SmartSecure transforms crime analysis in India with a district-wise
          system using machine learning. It provides real-time, visually
          intuitive crime data, predicts future trends, and encourages community
          engagement for a collaborative approach.
        </p>
      </div>
      <div className="container bg-white mx-auto p-8">
        {/* Feature 1: Real-time Crime Data Access */}
        <div className="flex flex-col md:flex-row mb-8 h-3/4 bg-blue-100 rounded-lg overflow-hidden">
          <div className="md:w-1/2 md:pr-4 p-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              Real-time Crime Data Access
            </h2>
            <p className="text-gray-800">
              SmartSecure sources real-time crime data from reliable government
              databases, offering an up-to-date and accurate reflection of the
              current crime scenario in each district.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Add an image or visualization for Feature 1 here */}
            <img
              src="/images/real_time_access.png"
              alt="Real-time Crime Data Access"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 2: District-wise Visualization and Analytics */}
        <div className="flex flex-col md:flex-row mb-8 h-3/4 bg-green-100 rounded-lg overflow-hidden">
          <div className="md:w-1/2 md:pr-4 p-8">
            <h2 className="text-3xl font-bold mb-4 text-green-700">
              District-wise Visualization and Analytics
            </h2>
            <p className="text-gray-800">
              The system presents crime rates in a user-friendly dashboard,
              allowing authorities to visually analyze trends, patterns, and
              hotspots across different districts. Utilizes interactive maps,
              charts, and graphs to highlight specific crime categories and
              their prevalence.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Add an image or visualization for Feature 2 here */}
            <img
              src="/images/district_visualization.png"
              alt="District-wise Visualization and Analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature 3: Machine Learning Crime Prediction */}
        <div className="flex flex-col md:flex-row mb-8 h-3/4 bg-purple-100 rounded-lg overflow-hidden">
          <div className="md:w-1/2 md:pr-4 p-8">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">
              Machine Learning Crime Prediction
            </h2>
            <p className="text-gray-800">
              Implements machine learning models to predict potential future
              crime trends based on historical data. Provides actionable
              insights to law enforcement, enabling them to proactively allocate
              resources and increase vigilance for specific crime types.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Add an image or visualization for Feature 3 here */}
            <img
              src="/images/crime_prediction.png"
              alt="Machine Learning Crime Prediction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Repeat the structure for other features */}
      </div>
    </div>
  );
};

export default Home;
