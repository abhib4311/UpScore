import React from "react";

const Enquiries = () => {
  return (
    <div className="p-6  min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-900">
          The lender checks your credit report to determine your credit eligibility when you apply for a loan or credit card.
        </h2>
        <p className="text-gray-600 mt-2">
          This is called an enquiry. Too many enquiries will hurt your credit score.
        </p>

        <div className="flex gap-4 mt-4">
          <div className="bg-blue-100 p-4 rounded-lg flex-1 text-center">
            <p className="text-gray-700">Total Enquiries</p>
            <p className="text-2xl font-bold text-blue-700">1</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 flex items-center">
          ℹ️ It is ideal to keep your enquiries below 3
        </p>
      </div>

      {/* Enquiry History */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
        <h3 className="text-lg font-semibold">Enquiries Made</h3>
        <div className="mt-4 border-t pt-4">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Lender Name</th>
                <th className="border p-2 text-left">Product Type</th>
                <th className="border p-2 text-left">Date of Enquiry</th>
                <th className="border p-2 text-left">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Branch International Financial Services Private Limited</td>
                <td className="border p-2">Personal Loan</td>
                <td className="border p-2">10th Jan 2025</td>
                <td className="border p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;
