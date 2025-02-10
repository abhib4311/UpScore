import React from "react";
import CTACard from "../components/CommonCom/Card";
// import DC01 from "../../../public/Icons/Section_Icons/DC01.png";

import cardData from "../datas/CardData";
import HeroSection01 from "../components/CommonCom/HomePage/HeroSection";
import HeroSection02 from "../components/CommonCom/HomePage/HeroSection02";
import ServicesSection from "../components/CommonCom/HomePage/ServiceSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-screen-xl py-20">
      {/* HeroSection 01 */}
      <HeroSection01 />
      {/* Section 02 */}
      <ServicesSection/>

      {/* Section 03 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-6 mx-auto max-w-screen-xl py-20">
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
