import React from "react";
import {
  FaCheckCircle,
  FaUserCheck,
  FaChartBar,
  FaLightbulb,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { creditScore } from "../../datas/CardData";
import { ServiceCardSection } from "../../components/CardSection";

const CreditScorePage = () => {
  return (
    <div className="bg-gray-100 text-black py-12">
      {/* Section 1: What is a Credit Score? */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold leading-tight text-black">
              Unlock Your Financial Power!
            </h2>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              <strong>Your Credit Score: The Key to Your Future.</strong>
              <br />
              Your credit score determines your financial credibility. A good
              score means better loans, lower interest rates, and financial
              freedom. Check yours today—absolutely free!
            </p>
          </div>

          {/* Right: Image Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-80 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">📊 Credit Score Meter</span>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works (Step-by-Step Cards) */}
      <ServiceCardSection data={creditScore} />

      {/* Section 3: Benefits of Checking Your Credit Score */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-64 md:h-80 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">
              🏦 Financial Success Illustration
            </span>
          </div>

          {/* Right: Benefits */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold leading-tight text-black">
              Why Should You Check Your Score?
            </h2>
            <h3 className="text-xl text-green-600 mt-2">
              Stay Ahead, Stay Informed!
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Know where you stand financially",
                "Plan better for loans",
                "Get free expert recommendations",
              ].map((benefit, index) => (
                // <li key={index} className="flex items-center text-lg text-gray-700 leading-relaxed">
                //   <FaCheckCircle className="text-green-600 mr-3 text-xl" /> {benefit}
                // </li>
                <motion.li
                  key={index}
                  className="flex items-center text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.4,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {/* Checkmark Animation */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: index * 0.4,
                      duration: 0.3,
                      ease: "backOut",
                    }}
                  >
                    <FaCheckCircle className="text-green-600 mr-3 text-xl" />
                  </motion.div>

                  {/* Text Animation */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.5, duration: 0.5 }}
                  >
                    {benefit}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 text-lg">
              Check My Score Now!
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials (Enhanced Carousel with Auto-Scrolling) */}
      {/* <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Real people, real results! See how checking their credit score helped them.
          </p>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full"
          >
            {[
              { name: "Alice Johnson", feedback: "I improved my score by 100 points!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "David Lee", feedback: "Now I qualify for better loans! I am happy now", img: "https://randomuser.me/api/portraits/men/46.jpg" },
              { name: "Sophia Patel", feedback: "The insights helped me fix errors on my report!", img: "https://randomuser.me/api/portraits/women/50.jpg" },
              { name: "Michael Chen", feedback: "This free check saved me thousands on my mortgage!", img: "https://randomuser.me/api/portraits/men/52.jpg" }
            ].map((user, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 transform hover:scale-105">
                  <img src={user.img} alt={user.name} className="w-16 h-16 rounded-full border-4 border-green-500 mb-4" />
                  <p className="text-lg text-gray-800 font-semibold leading-relaxed">{user.feedback}</p>
                  <p className="text-green-600 mt-2 font-bold">- {user.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
    </div>
  );
};

export default CreditScorePage;
