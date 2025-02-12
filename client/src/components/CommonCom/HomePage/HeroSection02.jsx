import React from "react";
import Button from "../../CommonCom/Button";
import { FaArrowRight } from "react-icons/fa";
import CTAStats from "../../CommonCom/Stats";
import statsData from "../../../datas/StatsData";
import { useNavigate } from "react-router-dom";

import StatsSection from "../../StatsSection";

const HeroSection02 = () => {
  const isLoggedIn = false; // Replace with actual auth check
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(isLoggedIn ? "/dashboard" : "/login");
  };

  return (
    <div className="flex-col sm:flex-row">
      <h1 className="text-5xl font-bold text-gray-900 ml-50 mb-1 mt-20 w-200 text-center">
        You're Just a Few Steps Away from Financial Freedom!
      </h1>
      <div className="flex flex-col lg:flex-row gap-0 items-center w-11/12 mx-auto">
        <div className="lg:w-[50%] flex gap-15 flex-col items-start">
          <p className="font-medium text-xl text-justify w-[60%] text-gray-600">
            We understand the burden of debt, and we're here to guide you toward
            a stress-free future. Let’s create a personalized plan that works
            for you!
          </p>
          <div className="w-fit mt-0">
            <Button active={true} onClick={handleButtonClick}>
              <div className="flex items-center gap-3 cursor-pointer">
                Get Your Free Debt Assessment Now
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        <div className="lg:w-[40%] mt-10  min-w-[300px]">
          <img
            src="./Images/Hero02.png"
            alt="image"
            className="shadow-white shadow-[-20px_-20px_0_0] w-2xl"
          />
          <div className="lg:w-[40%] mt-10 min-w-[300px]">
            <img
              src="./Images/Hero02.png"
              alt="image"
              className="shadow-white shadow-[-20px_-20px_0_0] w-2xl"
            />
          </div>
        </div>
      </div>
      <StatsSection />
    </div>
  );
};

export default HeroSection02;
