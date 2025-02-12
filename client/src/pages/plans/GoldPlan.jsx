import React from "react";
import {
  FaCrown,
  FaUserTie,
  FaChartPie,
  FaClipboardList,
  FaCalendarCheck,
  FaComments,
  FaFileAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { PlansCardSection } from "../../components/CardSection";
import { goldPlan } from "../../datas/CardData";

const GoldPlan = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 py-12 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10 relative">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold leading-tight">
              Expert Guidance to Tackle Your Debt!
            </h2>
            <h3 className="text-xl mt-2">
              A dedicated assistant to create your personalized Debt Management
              Plan.
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              ✅ Get a <strong>dedicated expert</strong> for 1 week to analyze
              your finances.
              <br />✅ Receive a{" "}
              <strong>customized Debt Management Plan</strong> tailored for you.
              <br />✅ Understand your{" "}
              <strong>spending habits, debts, and repayment options.</strong>
              <br />✅ <strong>Download</strong> your personal debt analysis
              report after the session.
              <br />
            </p>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-md font-bold hover:bg-green-200 text-lg transition animate-pulse">
              Get My Personal Debt Plan
            </button>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-black rounded-lg flex items-center justify-center">
            {/* Crown above image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full flex items-center text-lg font-bold shadow-md">
              <FaCrown className="text-yellow-600 text-2xl mr-2" /> GOLD PLAN
            </div>
            <span className="text-white text-lg">
              🎨 Financial Expert with Customer
            </span>
          </div>
        </div>
      </section>
      {/* What's Included Section */}

      <PlansCardSection items={goldPlan} />
      {/* How It Works Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black my-4 leading-tight">
            Your Personalized Debt Plan in 3 Steps
          </h2>

          <div className="relative flex items-center justify-center mt-8">
            {/* Connecting Green Line */}
            <div className="absolute w-4/6 h-1 bg-green-600 top-6 left-1/2 transform -translate-x-1/2"></div>
            {[
              {
                icon: <FaCalendarCheck />,
                step: "1",
                title: "Book Your Consultation",
                desc: "Choose a time that suits you.",
              },
              {
                icon: <FaComments />,
                step: "2",
                title: "Talk to Your Expert",
                desc: "Get a deep debt analysis & recommendations.",
              },
              {
                icon: <FaFileAlt />,
                step: "3️",
                title: "Receive Your Debt Plan",
                desc: "A fully customized DMP is emailed to you.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-1/3"
              >
                <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl font-bold z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                <p className="text-lg text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-8 h-64 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">
              🎨 Icons for Booking, Chat, Report
            </span>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
            Real Results from Gold Plan Users
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Debt freedom starts with expert guidance.
          </p>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            className="w-full"
          >
            {[
              {
                name: "Rahul Sharma",
                feedback:
                  "The best ₹4,999 I ever spent! Now I have a clear debt plan.",
                img: "https://randomuser.me/api/portraits/men/41.jpg",
              },
              {
                name: "Sneha Kapoor",
                feedback:
                  "I felt lost with my debts, but now I finally have a structured plan!",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Amit Verma",
                feedback:
                  "The expert's insights were eye-opening! Highly recommended.",
                img: "https://randomuser.me/api/portraits/men/48.jpg",
              },
              {
                name: "Priya Malhotra",
                feedback:
                  "Debt consultation gave me clarity on my financial future!",
                img: "https://randomuser.me/api/portraits/women/50.jpg",
              },
              {
                name: "Rohan Gupta",
                feedback:
                  "Now I feel confident about handling my debts smartly!",
                img: "https://randomuser.me/api/portraits/men/52.jpg",
              },
            ].map((user, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-4 border-green-500 mb-4"
                  />
                  <p className="text-lg text-gray-800 font-semibold">
                    {user.feedback}
                  </p>
                  <p className="text-green-600 mt-2 font-bold">- {user.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default GoldPlan;
