import React from "react";

const PaymentHistory = () => {
  return (
    <div className="p-6  min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-900">
          Payment history is the record of your past loan and credit card repayments.
        </h2>
        <p className="text-gray-600 mt-2">
          Lenders check your credit history to determine how trustworthy you are when it comes to repaying loans and credit cards.
        </p>

        <div className="flex gap-4 mt-4">
          <div className="bg-green-100 p-4 rounded-lg flex-1 text-center">
            <p className="text-gray-700">On-time Payments</p>
            <p className="text-2xl font-bold text-green-700">24</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg flex-1 text-center">
            <p className="text-gray-700">Delayed Payments</p>
            <p className="text-2xl font-bold text-red-700">0</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 flex items-center">
          ℹ️ On-time repayment increases your credit score.
        </p>
      </div>

      {/* Payment History */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Payment History - Open Accounts</h3>
        <div className="mt-4 border-t pt-4">
          <h4 className="text-md font-bold">State Bank Of India</h4>
          <p className="text-gray-600">- Education Loan</p>
          <div className="flex justify-between mt-2 text-gray-700">
            <p>Account Details: <span className="font-bold">xxxx1688</span></p>
            <p>No. of delayed Payments: <span className="font-bold text-red-700">0 Delayed</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;