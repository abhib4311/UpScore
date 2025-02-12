import React, { useEffect, useState } from "react";
import {
  FaClipboardList,
  FaRegCalendarCheck,
  FaChartLine,
  FaShieldAlt,
  FaFlagCheckered,
} from "react-icons/fa";

import { motion } from "framer-motion";
import StatsSection from "../components/StatsSection";

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Jaago Grahak Jaago!",
    desc: "Identify your debt and know where you stand financially.",
  },
  {
    icon: <FaRegCalendarCheck />,
    title: "Planning is Winning!",
    desc: "Get a personalized debt repayment strategy with UpScore.",
  },
  {
    icon: <FaChartLine />,
    title: "Smart Moves Only!",
    desc: "Reduce interest, negotiate better repayment terms, and avoid financial traps.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Consistency is King!",
    desc: "Follow the UpScore Plan and track your progress step by step.",
  },
  {
    icon: <FaFlagCheckered />,
    title: "Freedom & Peace!",
    desc: "Say goodbye to debt and hello to financial independence. 🎉",
  },
];

const stats = [
  { label: "YEARS OF GLOBAL EXPERIENCE", value: 45 },
  { label: "CITIES ACROSS INDIA", value: 187 },
  { label: "ACCOUNTS MANAGED", value: 9_00 },
  { label: "CUSTOMER REVIEW RATING", value: "4.7/5" },
];

const OurMission = () => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(
        stats.map((stat) =>
          isNaN(stat.value)
            ? stat.value
            : Math.min(stat.value, animatedValues[stats.indexOf(stat)] + 5)
        )
      );
    }, 10);
    return () => clearInterval(interval);
  }, [animatedValues]);

  return (
    <div className="bg-gray-100 text-black">
      {/* Our Mission Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-12 px-6">
        <div className="md:w-1/2 text-left px-5">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            UpScore's mission is to empower individuals with clear, ethical, and
            effective debt relief solutions. We believe in freedom from
            financial stress and work tirelessly to provide transparent
            guidance, ensuring you reclaim control over your finances. <br />
            <strong>Debt Gone, Happiness On!</strong>
          </p>
        </div>
        <div className="md:w-1/2 h-60 bg-black flex items-center justify-center text-white text-xl rounded-lg shadow-lg">
          Image Placeholder
        </div>
      </section>

      {/* Steps Timeline - Horizontal */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          5 Steps to a Debt-Free Life
        </h2>
        <div className="flex items-center justify-center max-w-5xl mx-auto space-x-10 pt-10 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-64 h-80 text-center px-6 py-8 transition-transform duration-300 
           hover:scale-101 border border-gray-300 shadow-lg shadow-gray-500/50 rounded-lg bg-white 
           hover:bg-green-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {/* Fixed Icon Position */}
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full text-2xl absolute -top-8">
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="mt-8">
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-700 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="max-w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12 bg-green-600">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-8  transition duration-300 
                      "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-white text-3xl font-bold group-hover:text-white">
              {animatedValues[index]}
            </h3>
            <p className="text-white text-sm mt-2 group-hover:text-white">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </section> */}

      <StatsSection />

      {/* Trust & Security Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-12 px-6">
        <div className="md:w-1/2 h-60 bg-black flex items-center justify-center text-white text-xl rounded-lg shadow-lg">
          Image Placeholder
        </div>
        <div className="md:w-1/2 text-left ml-10">
          <h2 className="text-3xl font-bold text-black">Trust & Security</h2>
          <p className="mt-4 text-gray-700">
            At UpScore, we ensure the highest security standards with ISO
            9001/27001 certification and end-to-end encryption. Your financial
            data is always safe with us.
          </p>
          <p className="mt-4 text-gray-700">
            Join UpScore today and take the first step toward a stress-free
            life!
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
