import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { debtConsultation } from "../../datas/CardData";
import { ServiceCardSection } from "../../components/CardSection";

const DebtConsultation = () => {
  return (
    <div className="bg-gray-100 text-black py-12">
      {/* Section 1: Personal Debt Consultant */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-black h-64 md:h-80 rounded-lg"></div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight">
            Meet Your Debt-Saving Superhero!
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            <strong>
              1 Week.
              <br /> 1 Plan.
              <br /> A Lifetime of Financial Peace.
            </strong>{" "}
            <br />
            Get a personal expert to analyze, strategize, and optimize your debt
            situation. No more guessing—let an expert handle it!
          </p>
        </div>
      </section>

      {/* Section 2: What You Get */}

      <ServiceCardSection data={debtConsultation} />
      <div className="text-center mt-8">
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition-all">
          Start My Consultation Now!
        </button>
      </div>

      {/* Section 3: Success Stories */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Success Stories</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-3xl mx-auto"
        >
          {[
            {
              user: "John D.",
              text: "I reduced my debt by 30% in just a month!",
            },
            {
              user: "Sarah M.",
              text: "The consultant gave me a perfect plan to manage my loans!",
            },
            {
              user: "David P.",
              text: "Now I can confidently pay off my debts without stress!",
            },
            {
              user: "Emily R.",
              text: "The debt plan was a lifesaver! Highly recommended!",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-green-100 p-8 rounded-lg shadow-md text-center">
                <p className="text-xl text-gray-800 font-semibold italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <h3 className="text-lg font-bold mt-4 text-green-700">
                  - {testimonial.user}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default DebtConsultation;
