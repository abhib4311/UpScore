import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "../../CommonCom/Button";
import Hero from "../../../../public/Images/hero.png";
import speedometer from "../../../../public/Icons/speedometer.png";

const HeroSection01 = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authToken"); // Replace with actual auth check

  const handleCTAButtonClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-[50%] flex gap-15 flex-col items-start">
          <h1 className="text-5xl font-bold text-gray-900">Caught in Debt trap?</h1>
          <p className="text-xl text-justify text-gray-600  w-[90%] ">
            Drowning in debt and struggling to keep up? Don’t worry, we are here.
          </p>

          <div className="w-fit">
            <CTAButton active={true} onClick={handleCTAButtonClick}>
              <div className="flex items-center gap-3">
                Check credit score
                <img src={speedometer} alt="speedometer" className="w-5 h-5" />
              </div>
            </CTAButton>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <img
            src={Hero}
            alt="hero"
            className="shadow-white shadow-[-20px_-20px_0_0] w-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection01;
