import React from "react";
import { securedLoan } from "../../datas/CardData";
import { ServiceCardSection } from "../../components/CardSection";

const SecuredLoan = () => {
  return (
    <div className="bg-gray-100 text-black py-12">
      {/* Section 1: Overview */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight text-black">
            Simplify Your Debt with a Secured Loan!
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            Tired of managing multiple debts? We combine them into{" "}
            <b>one secured loan</b> with <b>better terms</b> and{" "}
            <b>lower interest rates</b> to make repayment easier.
          </p>
        </div>

        {/* Right: Image Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-800 h-64 md:h-80 rounded-lg shadow-lg"></div>
      </section>

      {/* Section 2: Why Choose a Secured Loan? */}
      <ServiceCardSection data={securedLoan} />

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto text-center mt-16 px-6">
        <h2 className="text-3xl font-bold text-black mb-4">
          Apply for a Secured Loan Today!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Get rid of financial worries and simplify your repayments.
        </p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition-all">
          Apply for a Secured Loan!
        </button>
      </section>
    </div>
  );
};

export default SecuredLoan;
