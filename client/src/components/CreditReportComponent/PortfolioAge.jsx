import React from "react";

const PortfolioAge = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Top Navigation Tabs */}
      
      {/* Credit History Section */}
      <div className="bg-white p-6 shadow-lg rounded-b-lg">
        <h2 className="text-lg font-semibold text-gray-700">
          Age of your accounts refers to the duration you have been using credit. Longer the credit history, higher will be your credit score.
        </h2>

        <div className="flex justify-between bg-gray-200 p-4 rounded-lg mt-4">
          <div className="flex-1 text-center">
            <p className="text-gray-600 font-medium">No of open accounts with <span className="font-bold">less than 2 years history</span></p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="flex-1 text-center border-l border-gray-300">
            <p className="text-gray-600 font-medium">No of open accounts with <span className="font-bold">more than 2 years history</span></p>
            <p className="text-3xl font-bold text-gray-800">1</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2">ℹ️ Longer the credit, higher will be your credit score.</p>
      </div>

      {/* Open Accounts List */}
      <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Open Accounts</h3>

        <div className="mt-4 p-4 border border-gray-300 rounded-lg">
          <h4 className="text-gray-800 font-bold">State Bank Of India</h4>
          <p className="text-gray-600">- Education Loan</p>
          <div className="flex justify-between mt-2 text-gray-700">
            <p><span className="font-semibold">Date Opened:</span> 8th Apr 2022</p>
            <p><span className="font-semibold">Age of A/C:</span> 2Y, 10M</p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-800">Keeping your first credit card active will improve your Credit score!</h3>
          <p className="text-gray-700 mt-2">Get more insights like this to take control of your Credit health with CreditFit</p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">Know more</button>
      </div>
    </div>
  );
};

export default PortfolioAge;
