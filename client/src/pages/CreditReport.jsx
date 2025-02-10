// import React, { useState } from "react";

// const CreditReport = () => {
//   const tabs = [
//     "Your Borrowings",
//     "Portfolio Age",
//     "Payment History",
//     "Cards Utilization",
//     "Mix of Borrowings",
//     "Enquiries",
//   ];

//   const [activeTab, setActiveTab] = useState("Your Borrowings");

//   // Sample Data
//   const data = {
//     "Your Borrowings": {
//       totalLoans: 4,
//       positiveAccounts: 4,
//       negativeAccounts: 0,
//       accounts: [
//         {
//           bank: "State Bank Of India",
//           type: "Education Loan",
//           accountNumber: "xxxx1688",
//           status: "Open Active",
//           isClosed: false,
//         },
//         {
//           bank: "SBI",
//           type: "Personal Loan",
//           accountNumber: "xxxxC1FE",
//           status: "Closed",
//           isClosed: true,
//         },
//       ],
//     },
//     "Portfolio Age": { content: "Portfolio age details go here..." },
//     "Payment History": { content: "Payment history data goes here..." },
//     "Cards Utilization": { content: "Cards utilization statistics go here..." },
//     "Mix of Borrowings": { content: "Borrowing mix analysis goes here..." },
//     "Enquiries": { content: "Recent credit enquiries go here..." },
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center text-2xl font-semibold py-4">
//         CREDIT ASSESSMENT
//       </div>

//       {/* Tab Navigation */}
//       <div className="flex flex-wrap justify-center bg-white shadow-md p-4 rounded-md">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 mx-2 font-medium ${
//               activeTab === tab ? "text-green-600 border-b-2 border-green-600" : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="mt-6 p-6 bg-white shadow-md rounded-md">
//         {activeTab === "Your Borrowings" ? (
//           <>
//             <h2 className="text-xl font-semibold mb-4">
//               You have {data["Your Borrowings"].totalLoans} Loan accounts.
//             </h2>
//             <div className="flex gap-6">
//               <div className="bg-green-100 text-green-700 px-6 py-3 rounded-md text-lg font-semibold">
//                 Positive Accounts: {data["Your Borrowings"].positiveAccounts}
//               </div>
//               <div className="bg-red-100 text-red-700 px-6 py-3 rounded-md text-lg font-semibold">
//                 Negative Accounts: {data["Your Borrowings"].negativeAccounts}
//               </div>
//             </div>

//             {/* Account List */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold">Your Positive Account - Open</h3>
//               {data["Your Borrowings"].accounts
//                 .filter((acc) => !acc.isClosed)
//                 .map((acc, index) => (
//                   <div key={index} className="bg-gray-50 p-4 mt-2 rounded-md shadow-md flex justify-between">
//                     <div>
//                       <p className="font-semibold">{acc.bank}</p>
//                       <p className="text-gray-600">{acc.type}</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-700">Account Number: {acc.accountNumber}</p>
//                       <p className="text-green-600">{acc.status}</p>
//                     </div>
//                   </div>
//                 ))}

//               <h3 className="mt-6 text-lg font-semibold">Your Positive Account - Closed</h3>
//               {data["Your Borrowings"].accounts
//                 .filter((acc) => acc.isClosed)
//                 .map((acc, index) => (
//                   <div key={index} className="bg-gray-50 p-4 mt-2 rounded-md shadow-md flex justify-between">
//                     <div>
//                       <p className="font-semibold">{acc.bank}</p>
//                       <p className="text-gray-600">{acc.type}</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-700">Account Number: {acc.accountNumber}</p>
//                       <p className="text-red-600">{acc.status}</p>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600">{data[activeTab]?.content}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreditReport;
import React, { useState } from "react";
import Borrowings from "../components/CreditReportComponent/Borrowings";
import PortfolioAge from "../components/CreditReportComponent/PortfolioAge";
import PaymentHistory from "../components/CreditReportComponent/PaymentHistory";
import CardsUtilization from "../components/CreditReportComponent/CardUtilization";
import MixOfBorrowings from "../components/CreditReportComponent/MixOfBorrowings";
import Enquiries from "../components/CreditReportComponent/Enquiries";

const CreditReport = () => {
  const tabs = [
    "Your Borrowings",
    "Portfolio Age",
    "Payment History",
    "Cards Utilization",
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
