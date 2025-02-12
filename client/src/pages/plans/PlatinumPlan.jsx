import React from "react";
import {
  FaCrown,
  FaHandshake,
  FaBalanceScale,
  FaChartLine,
} from "react-icons/fa";
import { MdCall, MdAttachMoney, MdCheckCircle } from "react-icons/md";
import { PlansCardSection } from "../../components/CardSection";
import { platinumPlan } from "../../datas/CardData";

const PlatinumPlan = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section (Green 700 → Green 600) */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-12 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold leading-tight">
              Comprehensive Debt Relief & Consolidation!
            </h2>
            <h3 className="text-xl mt-2">
              End harassment, reduce debt, and secure a solution for a single
              loan.
            </h3>
            <p className="text-lg mt-4 leading-relaxed">
              ✅ Debt Harassment Relief – We handle creditors on your behalf. ✅
              Debt Restructuring – Get a complete debt management strategy. ✅
              Secure Loan Solution – Explore consolidation loan options.
            </p>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-md font-bold hover:bg-green-200 text-lg transition animate-pulse">
              Get Full Debt Relief
            </button>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative w-full md:w-1/2 h-64 md:h-80 bg-black rounded-lg flex items-center justify-center">
            {/* Crown above image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full flex items-center text-lg font-bold shadow-md">
              <FaCrown className="text-yellow-600 text-2xl mr-2" /> PLATINUM
              PLAN
            </div>
            <span className="text-white text-lg">
              🎨 Relieved Customer Getting Full Debt Assistance
            </span>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <PlansCardSection items={platinumPlan} />
      {/* How It Works Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 leading-tight">
            Your Debt-Free Future Starts Here
          </h2>

          {/* Step-by-Step Guide with Icons */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            {[
              {
                title: "Schedule a Call",
                desc: "Discuss your financial situation with our experts.",
                icon: <MdCall className="text-green-600 text-4xl" />,
              },
              {
                title: "We Negotiate for You",
                desc: "We handle creditors & restructure your debts.",
                icon: <FaHandshake className="text-green-600 text-4xl" />,
              },
              {
                title: "You Get Debt-Free",
                desc: "Enjoy a sustainable financial future.",
                icon: <MdAttachMoney className="text-green-600 text-4xl" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {step.icon}
                {index < 2 && (
                  <div className="w-16 h-1 bg-green-600 mt-2"></div>
                )}
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                <p className="text-lg text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="mt-8 h-64 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">
              🎨 Progress Bar Illustration
            </span>
          </div>
        </div>
      </section>

      {/* Pricing & Signup CTA */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-black">
          $499 – Full-Service Package
        </h2>
        <button className="mt-6 bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 hover:scale-105 transition-all duration-300 text-lg">
          Get Full Debt Relief
        </button>
      </section>

      {/* Services Comparison Table */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Compare Our Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-lg text-left border border-gray-300">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-4">Features</th>
                <th className="p-4">Free Plan</th>
                <th className="p-4">Gold Plan</th>
                <th className="p-4">Platinum Plan</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Credit Score Access",
                  free: true,
                  gold: true,
                  platinum: true,
                },
                {
                  feature: "Debt Consultation",
                  free: false,
                  gold: true,
                  platinum: true,
                },
                {
                  feature: "Creditor Negotiation",
                  free: false,
                  gold: false,
                  platinum: true,
                },
                {
                  feature: "Debt Restructuring",
                  free: false,
                  gold: false,
                  platinum: true,
                },
                {
                  feature: "Financial Freedom Planning",
                  free: false,
                  gold: false,
                  platinum: true,
                },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="p-4">{item.feature}</td>
                  <td className="p-4 text-center">
                    {item.free ? (
                      <MdCheckCircle className="text-green-500 text-2xl mx-auto" />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.gold ? (
                      <MdCheckCircle className="text-green-500 text-2xl mx-auto" />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {item.platinum ? (
                      <MdCheckCircle className="text-green-500 text-2xl mx-auto" />
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 hover:scale-105 transition-all duration-300 text-lg">
          Choose My Plan
        </button>
      </section>
    </div>
  );
};

export default PlatinumPlan;
