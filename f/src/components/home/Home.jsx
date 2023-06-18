import React, { useEffect, useState } from "react";

import About from "./About";
import HeroSection from "./HeroSection";
import MeetTheCoaches from "./MeetTheCoaches";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import Contact from "./Contact";
import "../../loading.scss";
import LoadingAnimation from "../loaders/LoadingAnimation";
import { motion } from "framer-motion";
import Loader1 from "../loaders/Loader1";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="d-flex flex-column w-100 home-section">
      {isLoading ? (
        <Loader1 />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <HeroSection />
          <About />
          <MeetTheCoaches />
          <Testimonials />
          <HowItWorks />
          <Contact />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
