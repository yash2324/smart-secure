// Home.js

import React from "react";
import { motion } from "framer-motion";
import homeDraw from "../images/homepageDraw.jpeg";
import rtcc from "../images/rtcc_detail_1-removebg-preview.png";
import visual from "../images/indiaVisual.png";
import explainer from "../images/42492_2021_75_Fig1_HTML.webp";

const featureVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.05 },
};

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="md:pb-96 bg-gray-900"
          initial="hidden"
          animate="visible"
          variants={featureVariants}
        >
          <h2 className="font-bold ml-2 my-4 mt-40 text-2xl">SmartSecure</h2>
          <p className="ml-2">
            SmartSecure transforms crime analysis in India with a district-wise
            system using machine learning. It provides real-time, visually
            intuitive crime data, predicts future trends, and encourages
            community engagement for a collaborative approach.
          </p>
        </motion.div>
        <motion.img
          className="w-full md:w-96 rounded-xl opacity-60 p-4 mt-24  mx-auto"
          src={homeDraw}
          initial="hidden"
          animate="visible"
          variants={featureVariants}
        />
      </div>
      <div className="bg-white w-full p-8 mt-8 md:mr-0">
        {/* Feature 1: Real-time Crime Data Access */}
        <h1 className="text-3xl font-bold text-center mb-4">Key Features :</h1>
        <motion.div
          className="flex flex-col md:flex-row mb-8 h-3/4 bg-blue-200 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={featureVariants}
          whileHover="hover"
        >
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
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
            <motion.img
              src={rtcc}
              alt="Real-time Crime Data Access"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            />
          </div>
        </motion.div>

        {/* Feature 2: District-wise Visualization and Analytics */}
        <motion.div
          className="flex flex-col md:flex-row mb-8 h-3/4 bg-green-200 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={featureVariants}
          whileHover="hover"
        >
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
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
            <motion.img
              src={visual}
              alt="Real-time Crime Data Access"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            />
          </div>
        </motion.div>

        {/* Feature 3: Machine Learning Crime Prediction */}
        <motion.div
          className="flex flex-col md:flex-row mb-8 h-3/4 bg-purple-200 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={featureVariants}
          whileHover="hover"
        >
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
          <div className="w-1/3 md:w-1/3 rounded-lg ml-auto">
            {/* Add an image or visualization for Feature 3 here */}
            <motion.img
              src={explainer}
              alt="Machine Learning Crime Prediction"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row mb-8 h-3/4 bg-yellow-100 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={featureVariants}
          whileHover="hover"
        >
          <div className="md:w-1/2 md:pr-4 p-8">
            <h2 className="text-3xl font-bold mb-4 text-yellow-800">
              Customizable Alert System
            </h2>
            <p className="text-gray-800">
              SmartSecure incorporates an alert system that notifies authorities
              when crime rates exceed predefined thresholds, allowing for swift
              and targeted responses.
            </p>
          </div>
          <div className="w-1/3 md:w-1/3 rounded-lg ml-auto">
            {/* Add an image or visualization for Feature 3 here */}
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/559/559384.png"
              alt="Machine Learning Crime Prediction"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:flex-row mb-8 h-3/4 bg-red-100 rounded-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={featureVariants}
          whileHover="hover"
        >
          <div className="md:w-1/2 md:pr-4 p-8">
            <h2 className="text-3xl font-bold mb-4 text-red-700">
              Community Engagement and Reporting
            </h2>
            <p className="text-gray-800">
              Facilitates citizen involvement by incorporating a reporting
              mechanism, encouraging communities to share information and
              concerns. Integrates social media platforms for crowd-sourced data
              collection and community-driven crime awareness.
            </p>
          </div>
          <div className="w-1/3 md:w-1/3 rounded-lg ml-auto">
            {/* Add an image or visualization for Feature 3 here */}
            <motion.img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/050/321/small/handshake-symbol-icon-png.png"
              alt="Machine Learning Crime Prediction"
              className="w-full h-full object-cover"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
