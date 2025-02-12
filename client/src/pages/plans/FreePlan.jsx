import React from "react";
import {
  FaCheckCircle,
  FaCreditCard,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { PlansCardSection } from "../../components/CardSection";
import { freePlan } from "../../datas/CardData";

const FreePlan = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-12 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold leading-tight">
              Start Your Debt-Free Journey – For Free!
            </h2>
            <h3 className="text-xl mt-2">
              Check where you stand with your credit score & report.
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              ✅ Get instant access to your credit score and detailed report. ✅
              Monitor your financial health easily. ✅ Upgrade anytime for
              expert debt solutions!
            </p>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-md font-bold hover:bg-green-200 text-lg transition">
              Check My Credit Score
            </button>
          </div>

          {/* Right: Image Placeholder */}
          <div className="w-full md:w-1/2 h-64 md:h-80 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">
              🎨 Happy User Checking Credit Score
            </span>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <PlansCardSection items={freePlan} />

      {/* How It Works Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
            Your Free Debt Health Check – In 3 Simple Steps
          </h2>

          {/* Timeline UI */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <div className="absolute w-3/5 h-1 bg-green-600 top-6 left-1/2 transform -translate-x-1/2"></div>
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create a free account in seconds.",
              },
              {
                step: "2",
                title: "Get Instant Access",
                desc: "View your credit score & report immediately.",
              },
              {
                step: "3",
                title: "Plan Your Next Move",
                desc: "Understand your financial standing & explore solutions.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-1/3"
              >
                <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl font-bold z-10">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                <p className="text-lg text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-8 h-64 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">🎨 Timeline Illustration</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
            What Our Users Say About Free Plan
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Real stories from real people.
          </p>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
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
              {
                name: "Alex T.",
                feedback:
                  "I had no idea about my credit score until I used this free tool. Now I’m more financially aware!",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Priya M.",
                feedback:
                  "Great first step towards managing my finances. The insights were super helpful!",
                img: "https://randomuser.me/api/portraits/women/47.jpg",
              },
              {
                name: "Alex T.",
                feedback:
                  "I had no idea about my credit score until I used this free tool. Now I’m more financially aware!",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                name: "Priya M.",
                feedback:
                  "Great first step towards managing my finances. The insights were super helpful!",
                img: "https://randomuser.me/api/portraits/women/47.jpg",
              },
            ].map((user, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-16 h-16 rounded-full border-4 border-green-600 mb-4"
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

      {/* Pricing & CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-black">Free Forever!</h2>
        <p className="text-lg text-gray-700 mt-2">
          Start your journey towards financial freedom today.
        </p>
        <button className="mt-6 bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 text-lg transition">
          Check My Credit Score Now
        </button>
      </section>
    </div>
  );
};

export default FreePlan;
