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
    <div className="justify-between">
      <div className="flex flex-col lg:flex-row gap-10 items-center w-300">
        <div className="lg:w-[50%] flex gap-15 flex-col items-start">
          <h1 className="text-5xl font-bold text-gray-900">Caught in Debt trap?</h1>
          <p className="text-xl text-justify text-gray-600 w-[90%]">
            Drowning in debt and struggling to keep up? Don’t worry, we are here.
          </p>

          <div className="w-fit">
            <Button active={true} onClick={handleButtonClick}>
              <div className="flex items-center gap-3 cursor-pointer">
                Check credit score
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
