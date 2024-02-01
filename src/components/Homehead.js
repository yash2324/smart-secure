import React from "react";
import hero from "../images/heroImage.png";
import { featureVariants } from "../utils/constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Homehead = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto md:gap-8 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center md:col-span-7">
          <motion.h1
            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          >
            Making a safer
            <br /> India.
          </motion.h1>
          <motion.p
            className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-lg lg:text-xl"
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          >
            SmartSecure transforms crime analysis in India with a district-wise
            system using machine learning. It provides real-time, visually
            intuitive crime data, predicts future trends, and encourages
            community engagement for a collaborative approach.
          </motion.p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to="/login" // Replace with the actual section ID you want to scroll to
              className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="w-4 h-4 mr-2 -ml-1 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
              Get Started
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <motion.img
            className="w-full h-auto rounded-xl opacity-60 p-4 mt-24 mx-auto"
            src={hero}
            alt="hero image"
            initial="hidden"
            animate="visible"
            variants={featureVariants}
          />
        </div>
      </div>
    </section>
  );
};

export default Homehead;
