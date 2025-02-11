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
    <div className="flex flex-col  h-full px-6 py-10">
      <div className="w-full max-w-4xl flex flex-col gap-10 bg-white p-6 ">
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


// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-100  p-8 flex flex-col gap-6">
//       {/* Credit Score Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Hey Abhishek! Here's your Credit Score for Feb 25</h2>
//           <span className="text-gray-500 text-sm">Next report on: 07 Mar 25</span>
//         </div>
//         <div className="flex items-center gap-6">
//           <div className="text-center p-4 border rounded-lg bg-gray-50 w-36">
//             <span className="text-4xl font-bold text-red-500">742</span>
//             <p className="text-gray-600 text-sm">Your Score</p>
//           </div>
//           <div className="flex flex-col gap-1">
//             <p className="text-red-500 font-medium">Your Credit Score needs attention!</p>
//             <p className="text-gray-600 text-sm">Kick-start your score improvement journey with Credit Plus.</p>
//           </div>
//         </div>
//         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Download Report</button>
//       </div>

//       {/* Bank Accounts Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
//         <div>
//           <h3 className="text-lg font-semibold">One View of all your Bank Accounts</h3>
//           <p className="text-gray-600 text-sm">Get to know your spend pattern across your accounts – all in one place.</p>
//         </div>
//         <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Know More</button>
//       </div>

//       {/* Low Credit Score Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <p className="text-red-500 font-semibold">You have a Low Credit Score</p>
//         <p className="text-gray-600 text-sm">which might impact your Loan/Credit Card applications.</p>
//         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Improve Your Score Now</button>
//       </div>

//       {/* Credit Health Report Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <h3 className="text-lg font-semibold">Get your Credit Health Report to find out more!</h3>
//         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Know more</button>
//       </div>

//       {/* Personalized Offers Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold mb-4">Personalized Offers</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               title: "CREDIT+ Score Improvement Service",
//               description: "✔ No hard credit check\n✔ Personalized plan\n✔ Credit report tracking",
//               buttonText: "Apply Now",
//             },
//             {
//               title: "Paisabazaar StepUp Credit Card",
//               description: "✔ Backed by FD\n✔ Build your credit score\n✔ Credit limit up to 200% of FD Amount",
//               buttonText: "Apply Now",
//             },
//             {
//               title: "Get Loan against your Mutual Fund Portfolio",
//               description: "✔ Borrow up to 80% of MF value\n✔ No need for closure or insurance exchange",
//               buttonText: "Check Now",
//             },
//           ].map((offer, index) => (
//             <div key={index} className="border p-4 rounded-lg bg-gray-50 text-center">
//               <h4 className="text-md font-semibold">{offer.title}</h4>
//               <p className="text-gray-600 text-sm whitespace-pre-line">{offer.description}</p>
//               <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">{offer.buttonText}</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <footer className="w-full text-center text-gray-500 text-sm mt-6">
//          CIN No. U74900HR2011PTC044581 © Copyright 2014-2025 Paisabazaar.com. All Rights Reserved.<br/>
//           *No. 1 in terms of loan disbursal as per industry estimates
//      </footer>
//     </div>
//   );
// };

// export default Dashboard;
