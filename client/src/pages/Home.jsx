import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CTACard from "../components/CommonCom/Card";
import cardData from "../datas/CardData";
import HeroSection01 from "../components/CommonCom/HomePage/HeroSection";
import HeroSection02 from "../components/CommonCom/HomePage/HeroSection02";
import ServicesSection from "../components/CommonCom/HomePage/ServiceSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl py-20">
      {/* HeroSection 01 with animation from bottom on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start below the screen
        whileInView={{ opacity: 1, y: 0 }} // Move to its final position (y: 0)
        transition={{ duration: 0.8 }}
      >
        <HeroSection01 />
      </motion.div>

      {/* Services Section with animation from bottom on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start below the screen
        whileInView={{ opacity: 1, y: 0 }} // Move to its final position (y: 0)
        transition={{ duration: 0.8 }}
      >
        <ServicesSection />
      </motion.div>

      {/* Cards Section with animation from bottom on scroll */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-6 mx-auto max-w-screen-xl py-20"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0, transition: { staggerChildren: 0.2 } },
          show: { opacity: 1 },
        }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 100 }} // Start below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to its final position (y: 0)
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation for each card
          >
            <CTACard icon={card.icon} heading={card.heading} linkto={card.link}>
              <p className="text-[16px] text-richblack-500">{card.para}</p>
            </CTACard>
          </motion.div>
        ))}
      </motion.div>

      {/* HeroSection 02 with animation from bottom on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start below the screen
        whileInView={{ opacity: 1, y: 0 }} // Move to its final position (y: 0)
        transition={{ duration: 0.8 }}
      >
        <HeroSection02 />
      </motion.div>
    </div>
  );
};

export default Home;
