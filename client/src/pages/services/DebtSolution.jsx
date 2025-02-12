import React from "react";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaChartLine,
  FaRegCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { debtSolution, harassmentRelief } from "../../datas/CardData";
import { ServiceCardSection } from "../../components/CardSection";

const DebtSolution = () => {
  return (
    <div className="bg-gray-100 text-black py-12">
      {/* Section 1: Debt Solutions Overview */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Image Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-800 h-64 md:h-80 rounded-lg shadow-lg"></div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Debt Solutions
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Are you trapped in debt, stressed by payments and collection calls?
            Our expert financial advisors and in-house lawyers negotiate with
            creditors, creating a personalized Debt Management Plan (DMP) with
            reduced payments and lower interest rates.
            <br />
            Regain control of your finances today.
          </p>
        </div>
      </section>

      {/* Section 2: What is a Debt Management Plan? */}
      <ServiceCardSection data={debtSolution} />

      {/* Section 3: Key Benefits of a DMP */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Key Benefits of a DMP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaBalanceScale className="text-green-600 text-4xl" />,
              title: "One Affordable Payment",
              description:
                "Instead of juggling multiple creditors, make just one easy monthly payment.",
            },
            {
              icon: <FaShieldAlt className="text-green-600 text-4xl" />,
              title: "Legal Protection",
              description:
                "Our legal experts protect you from harassment, court hearings, and disputes.",
            },
            {
              icon: <FaChartLine className="text-green-600 text-4xl" />,
              title: "Credit Score Boost",
              description:
                "Improve your credit rating with structured payments and effective debt management.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Why Choose Us? */}
      <section className="max-w-6xl mx-auto mt-16 px-6 bg-white py-10 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaRegCheckCircle className="text-green-600 text-4xl" />,
              title: "Proven Track Record",
              description:
                "Thousands of clients have successfully reduced their debts with our solutions.",
            },
            {
              icon: <FaUsers className="text-green-600 text-4xl" />,
              title: "Expert Legal Support",
              description:
                "Our financial advisors and legal experts provide guidance at every step.",
            },
            {
              icon: <FaShieldAlt className="text-green-600 text-4xl" />,
              title: "100% Confidential",
              description:
                "Your financial information is safe and secure with us.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto text-center mt-16 px-6">
        <h2 className="text-3xl font-bold text-black mb-4">
          Get Started Today!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Take the first step towards financial freedom. Sign up for a free
          consultation today.
        </p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition-all">
          Get My Custom Plan!
        </button>
      </section>
    </div>
  );
};

export default DebtSolution;
