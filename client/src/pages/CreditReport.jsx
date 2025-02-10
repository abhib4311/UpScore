
import React, { useState } from "react";
import Borrowings from "../components/CreditReportComponent/Borrowings";
import PortfolioAge from "../components/CreditReportComponent/PortfolioAge";
import PaymentHistory from "../components/CreditReportComponent/PaymentHistory";
import CardsUtilization from "../components/CreditReportComponent/CardUtilization";
import MixOfBorrowings from "../components/CreditReportComponent/MixofBorrowings";
import Enquiries from "../components/CreditReportComponent/Enquiries";

const CreditReport = () => {
  const tabs = [
    "Your Borrowings",
    "Portfolio Age",
    "Payment History",
    // "Cards Utilization",
    "Mix of Borrowings",
    "Enquiries",
  ];

  const [activeTab, setActiveTab] = useState("Your Borrowings");

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center text-2xl font-semibold py-4">
        CREDIT ASSESSMENT
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center bg-white shadow-md p-4 rounded-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 font-medium ${
              activeTab === tab ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-md">
        {activeTab === "Your Borrowings" && <Borrowings />}
        {activeTab === "Portfolio Age" && <PortfolioAge />}
        {activeTab === "Payment History" && <PaymentHistory />}
        {activeTab === "Cards Utilization" && <CardsUtilization />}
        {activeTab === "Mix of Borrowings" && <MixOfBorrowings />}
        {activeTab === "Enquiries" && <Enquiries />}
      </div>
    </div>
  );
};

export default CreditReport;
