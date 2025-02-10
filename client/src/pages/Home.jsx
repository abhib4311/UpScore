import React from "react";
import CTACard from "../components/CommonCom/Card";
import cardData from "../datas/data";
import HeroSection01 from "../components/CommonCom/HomePage/HeroSection";
import HeroSection02 from "../components/CommonCom/HomePage/HeroSection02";
import ServicesSection from "../components/CommonCom/HomePage/ServiceSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section 01 */}
      <HeroSection01 />

      {/* Services Section */}
      <ServicesSection />

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <CTACard key={index} icon={card.icon} heading={card.heading} linkto={card.link}>
            <p className="text-[16px] text-richblack-500">{card.para}</p>
          </CTACard>
        ))}
      </div>

      {/* Hero Section 02 */}
      <HeroSection02 />
    </div>
  );
};

export default Home;
