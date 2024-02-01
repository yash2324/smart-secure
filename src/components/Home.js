// Home.js

import React from "react";
import { motion } from "framer-motion";
import Homehead from "./Homehead";
import { featureVariants } from "../utils/constants";
import HomeRest from "./HomeRest";

const Home = () => {
  return (
    <div>
      <Homehead />
      <HomeRest />
    </div>
  );
};

export default Home;
