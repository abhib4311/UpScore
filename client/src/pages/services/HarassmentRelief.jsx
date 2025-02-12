import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { harassmentRelief } from "../../datas/CardData";
import { ServiceCardSection } from "../../components/CardSection";

const HarassmentRelief = () => {
  return (
    <div className="bg-gray-100 text-black py-12">
      {/* Section 1: Stop Harassment Now */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight">
            No More Stress, No More Harassment!
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            <strong>We Protect You from Aggressive Creditors.</strong>
            Debt collectors can be ruthless. We help you fight back legally,
            ensuring peace of mind while you focus on repaying debts.
          </p>
        </div>

        {/* Right: Image (Placeholder for Now) */}
        <div className="w-full md:w-1/2 bg-black h-64 md:h-80 rounded-lg"></div>
      </section>

      {/* Section 2: How We Stop Harassment? */}
      <ServiceCardSection data={harassmentRelief} />
      <div className="text-center mt-8">
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition-all">
          Get Legal Protection Now!
        </button>
      </div>

      {/* Section 3: Know Your Rights */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Know Your Rights
        </h2>

        <div
          className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          {/* Left: Icon */}
          <div className="text-green-600 text-6xl">
            <FaShieldAlt />
          </div>

          {/* Right: Content */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">You Have Legal Protections</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Debt collectors cannot harass, threaten, or mislead you. Laws like
              the <b>Fair Debt Collection Practices Act (FDCPA)</b> protect your
              rights. We ensure that you are treated fairly and legally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HarassmentRelief;
