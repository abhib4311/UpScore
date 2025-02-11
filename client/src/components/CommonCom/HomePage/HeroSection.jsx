import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../CommonCom/Button";
import Carousel from "../../CommonCom/Carousel"; // Import the new Carousel component

const HeroSection01 = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authToken"); // Replace with actual auth check

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-10  ">
        <div className="lg:w-[50%] flex gap-8 flex-col ">
          <h1 className="text-5xl font-bold text-gray-900">Caught in Debt trap?</h1>
          <i className="text-xl">Don't worry we are here to help you!</i>
          <p className="text-xl text-justify text-gray-600 w-[90%] mt-5">
          Struggling with debt? Our experts negotiate with creditors to lower payments and interest rates. Take control of your finances today!
          </p>
      
          <div className="w-fit mt-10">
            <Button active={true} onClick={handleButtonClick}>
              <div className="flex items-center gap-3 cursor-pointer">
                Get start today
                <img src="./Icons/speedometer.png" alt="speedometer" className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </div>

        {/* 🚀 Carousel added here replacing static image */}
        <div className="lg:w-[50%]">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection01;
