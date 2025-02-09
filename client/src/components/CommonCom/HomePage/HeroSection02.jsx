import React from "react";
import CTAButton from "../Button";
import { FaArrowRight } from "react-icons/fa";
import Hero02 from "../../../../public/Images/hero02.png";
import speedometer from "../../../../public/Icons/speedometer.png";

const HeroSection02 = () => {
  return (
    <div className=" flex-col sm:flex-row">
      <h1 className="text-3xl ml-100 font-semibold mb-1 mt-20 w-120 text-center justify-center text-gray-900">
        You're Just a Few Steps Away from Financial Freedom!
      </h1>
      <div className="flex flex-col lg:flex-row gap-0 items-center  ">
        <div className="lg:w-[50%] flex gap-15 flex-col items-start">
          <p className="font-medium text-xl text-justify w-[60%] text-gray-600">
            We understand the burden of debt, and we're here to guide you toward
            a stress-free future. Let’s create a personalized plan that works
            for you!
          </p>

          <div className="w-fit mt-0">
            <CTAButton active={true} linkto={"/login"}>
              <div className="flex items-center gap-3">
                Get Your Free Debt Assessment Now
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>

        <div className="lg:w-[40%] mt-10 ml-2 min-w-[300px]">
          <img
            src={Hero02}
            alt="image"
            className="shadow-white shadow-[-20px_-20px_0_0] w-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-0 items-center bg-green-500 text-white">    
        hh
      </div>
    </div>
  );
};

export default HeroSection02;
