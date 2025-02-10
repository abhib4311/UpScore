import { FaExclamationTriangle } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import CTAButton from "../components/CommonCom/Button"; // Importing CTAButton
import { useNavigate } from "react-router-dom";

const user = {
  name: "John Doe",
  creditScore: 580,
};

const getCreditColor = (score) => {
  if (score >= 700) return "bg-green-500";
  if (score >= 600) return "bg-yellow-500";
  return "bg-red-500";
};

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-10">
        {/* Credit Score Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 shadow-lg rounded-2xl px-8 py-6"
        >
          <div className="flex justify-between mb-6 text-gray-700">
            <p className="text-xl font-semibold">Hi, {user.name}</p>
            <p className="text-sm">Generated on: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-center w-1/3">
              <div className={`w-20 h-20 ${getCreditColor(user.creditScore)} text-white flex items-center justify-center rounded-full text-2xl font-bold`}>
                {user.creditScore}
              </div>
              <p className="mt-2 font-medium">Credit Score: {user.creditScore}</p>
            </div>
            <div className="flex items-center gap-3 flex-1 text-gray-700">
              <FaExclamationTriangle className="text-yellow-500 text-3xl" />
              <p className="text-lg font-medium">
                {user.creditScore < 600 ? "Your Credit Score needs improvement!" : "Your Credit Score is good!"}
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <CTAButton active={true} onClick={() => alert("Downloading Report")}>
              Download Report <AiOutlineDownload className="inline ml-1 text-lg" />
            </CTAButton>
          <CTAButton active={true} onClick={() => navigate("/credit-report")}>
      View Credit Report
    </CTAButton>
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <InfoCard
          icon={<BsGraphUp className="text-6xl text-green-600" />}
          title={user.creditScore < 600 ? "You have a Low Credit Score" : "Your Score is Stable"}
          subtitle="Understanding Your Credit Score"
          description="Your score affects loan approvals, interest rates, and financial stability."
          extraPoints={[
            "A higher score helps secure better financial opportunities.",
            "Regular credit checks help maintain a healthy score.",
            "Ensure timely payments to improve your score."
          ]}
          buttonText="Improve Your Score"
        />

        <InfoCard
          icon={<IoDocumentTextOutline className="text-6xl text-blue-500" />}
          title="Your Credit Report: More Than Just a Score"
          subtitle="Detailed Analysis Available"
          description="Get a breakdown of your credit history, outstanding debts, and more."
          extraPoints={[
            "Check for any discrepancies in your credit report.",
            "Dispute errors to maintain accuracy in financial records.",
            "Improve your score with responsible credit behavior."
          ]}
          buttonText="Know More"
        />
      </div>
    </div>
  );
};

// Reusable Info Card Component with additional details
const InfoCard = ({ icon, title, subtitle, description, extraPoints, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 shadow-lg rounded-2xl px-8 py-6 flex items-start gap-6 w-full"
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-700 font-medium">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-right">
        <p className="text-gray-600 text-sm">{description}</p>
        
        {/* Bullet Points with Animation */}
        <ul className="list-none flex flex-col gap-2">
          {extraPoints.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="flex items-center gap-2 text-gray-700 text-sm"
            >
              <CheckCircle className="text-green-500 w-4 h-4" /> {point}
            </motion.li>
          ))}
        </ul>

        <CTAButton active={true} onClick={() => alert(buttonText)}>{buttonText}</CTAButton>
      </div>
    </motion.div>
  );
};

export default Dashboard;

// -------------------------------------------------------------------------------------------------------------
// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       {/* Header */}
//       <div className="w-full flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
//         <h1 className="text-xl font-semibold text-gray-700">Welcome, <span className="text-blue-600">User!</span></h1>
//         <button className="bg-gray-200 p-2 rounded-lg text-gray-700">User</button>
//       </div>

//       {/* Banner Section */}
//       <div className="w-full max-w-4xl bg-white shadow-md mt-6 p-6 rounded-lg flex flex-col md:flex-row items-center gap-4">
//         <img
//           src="https://via.placeholder.com/100"
//           alt="Illustration"
//           className="w-20 h-20"
//         />
//         <div>
//           <h2 className="text-lg font-bold">One View of all your Bank Accounts</h2>
//           <p className="text-gray-600">Get to know your spend pattern across your accounts - all in one place</p>
//         </div>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Know More</button>
//       </div>

//       {/* Recent Searches */}
//       <div className="w-full max-w-4xl bg-white shadow-md mt-6 p-6 rounded-lg">
//         <h2 className="text-lg font-bold">My Recent Searches</h2>
//         <p className="text-gray-600 mt-2">
//           You have not searched for any product in the last 30 days. Compare and apply for loan products and credit cards now. <a href="#" className="text-blue-600">Click here.</a>
//         </p>
//       </div>

//       {/* Footer */}
//       <footer className="w-full text-center text-gray-500 text-sm mt-6">
//         CIN No. U74900HR2011PTC044581 © Copyright 2014-2025 Paisabazaar.com. All Rights Reserved.<br/>
//         *No. 1 in terms of loan disbursal as per industry estimates
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;


// import { useState } from "react";
// import { FaBars, FaRegUser, FaSignOutAlt, FaHeadset, FaBox, FaHome } from "react-icons/fa";

// export default function Dashboard() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       {/* <div className={`bg-white shadow-lg ${isOpen ? "w-64" : "w-20"} transition-all duration-300`}>
//         <div className="flex items-center justify-between p-4">
//           <h2 className={`text-xl font-bold ${!isOpen && "hidden"}`}>paisa<b>bazaar</b></h2>
//           <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//             <FaBars size={20} />
//           </button>
//         </div>
//         <nav className="mt-5">
//           <MenuItem icon={<FaHome />} text="Dashboard" isOpen={isOpen} />
//           <MenuItem icon={<FaBox />} text="Products" isOpen={isOpen} />
//           <MenuItem icon={<FaHeadset />} text="Support" isOpen={isOpen} />
//           <MenuItem icon={<FaSignOutAlt />} text="Log Out" isOpen={isOpen} />
//         </nav>
//       </div> */}

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
//           <h1 className="text-2xl font-bold">Welcome, <span className="text-blue-600">User!</span></h1>
//           <div className="flex items-center space-x-2">
//             <FaRegUser size={20} />
//             <span>User</span>
//           </div>
//         </div>

//         {/* Banner */}
//         <div className="bg-white p-6 mt-6 rounded-lg shadow-md flex items-center justify-between">
//           <div>
//             <h3 className="text-lg font-semibold">One View of all your Bank Accounts</h3>
//             <p className="text-gray-600">Get to know your spend pattern across accounts - all in one place</p>
//           </div>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Know More</button>
//         </div>

//         {/* Recent Searches */}
//         <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold">My Recent Searches</h3>
//           <p className="text-gray-500 mt-2">You have not searched for any product in the last 30 days.</p>
//           <a href="#" className="text-blue-600 mt-2 inline-block">Click here</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Menu Item Component
// const MenuItem = ({ icon, text, isOpen }) => (
//   <div className="flex items-center space-x-3 p-4 hover:bg-gray-200 rounded-lg cursor-pointer">
//     {icon}
//     {isOpen && <span className="text-gray-700">{text}</span>}
//   </div>
// );
