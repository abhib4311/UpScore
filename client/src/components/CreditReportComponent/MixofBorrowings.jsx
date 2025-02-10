import React from "react";

const MixofBorrowings = () => {
  return (
    <div className="p-6  min-h-screen flex flex-col gap-6">
      {/* Credit Mix Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Credit Mix refers to the types of borrowing accounts you have.
        </h2>
        <div className="flex gap-6">
          <div className="bg-gray-200 p-4 rounded-lg w-1/2 text-center">
            <p className="text-gray-600">Secured Accounts</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg w-1/2 text-center">
            <p className="text-gray-600">Unsecured Accounts</p>
            <p className="text-2xl font-bold">1</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-bold">ℹ</span> Secured accounts are loans that are borrowed by pledging a security (For eg: Home Loan, Property Loan, Car Loan).
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">ℹ</span> Unsecured accounts are loans/credit cards that are borrowed without pledging any security (For eg: Personal Loan, Credit Cards).
        </p>
      </div>

      {/* Open Account Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Open Account Summary</h2>
        <div className="border-t pt-4">
          <p className="text-lg font-bold text-gray-800">State Bank Of India</p>
          <p className="text-gray-600">- Education Loan</p>
          <div className="mt-2 text-sm text-gray-500">
            <p>
              <span className="font-semibold">Account Details:</span> xxxx1688
            </p>
            <p>
              <span className="font-semibold">Borrowing Type:</span> Unsecured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixofBorrowings;
