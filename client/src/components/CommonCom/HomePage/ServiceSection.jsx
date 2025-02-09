import React from 'react';
import Button from '../../CommonCom/Button';
import { FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto p-5">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        Our Debt Relief Services!
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mt-5">
        Struggling with debt? You're not alone. We understand the stress and anxiety it brings. Let us help you regain control with expert guidance, legal support, and affordable repayment solutions. A debt-free future starts today! 💚
      </p>

      {/* Service Card */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 md:p-12 rounded-2xl shadow-md mt-10 w-full max-w-5xl">
        {/* Text Section */}
        <div className="flex flex-col justify-between items-start w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5">
            Short-Term Loans for Credit Improvement
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A debt trap is a cycle of borrowing where repayment becomes difficult due to high interest and poor financial planning. Breaking free requires budgeting, cutting expenses, and smart repayment strategies.
          </p>
          <Button active={true} linkto={"/login"} className="flex items-center gap-2">
            <span>Know more</span> 
            <FaArrowRight />
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="./Images/loan1.png" alt="Short-term Loan" className="max-w-xs md:max-w-sm w-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
