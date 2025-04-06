import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import PopularServices from "../components/PopularServices";
import Testimonials from "../components/Testimonials";

const Home = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      anchorPlacement: "top-bottom", // Makes the animation trigger when the element reaches the top of the viewport
    });
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <motion.section
        data-aos="fade-in"
        data-aos-duration="1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Banner />
      </motion.section>

      {/* Popular Services Section */}
      <motion.section
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <PopularServices />
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="how-it-works"
      >
        <HowItWorks />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="1000"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="testimonials"
      >
        <Testimonials />
      </motion.section>
    </div>
  );
};

export default Home;
