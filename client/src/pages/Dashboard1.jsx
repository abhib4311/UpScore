// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-100  p-8 flex flex-col gap-6">
//       {/* Credit Score Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center">
//           <h2 className="text-lg font-semibold">Hey Abhishek! Here's your Credit Score for Feb 25</h2>
//           <span className="text-gray-500">Next report on: 07 Mar 25</span>
//         </div>
//         <div className="flex items-center mt-4 gap-6">
//           <div className="text-center p-4 border rounded-lg bg-gray-50 w-36">
//             <span className="text-4xl font-bold text-red-500">742</span>
//             <p className="text-gray-600">Your Score</p>
//           </div>
//           <div>
//             <p className="text-red-500 font-medium">Your Credit Score needs attention!</p>
//             <p className="text-gray-600">Kick-start your score improvement journey with Credit Plus</p>
//           </div>
//         </div>
//         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Download Report</button>
//       </div>

//       {/* Bank Accounts Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
//         <div>
//           <h3 className="text-lg font-semibold">One View of all your Bank Accounts</h3>
//           <p className="text-gray-600">Get to know your spend pattern across your accounts – all in one place</p>
//         </div>
//         <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Know More</button>
//       </div>

//       {/* Low Credit Score Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <p className="text-red-500 font-semibold">You have a Low Credit Score</p>
//         <p className="text-gray-600">which might impact your Loan/Credit Card applications</p>
//         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Improve Your Score Now</button>
//       </div>

//       {/* Credit Health Report Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <h3 className="text-lg font-semibold">Get your Credit Health Report to find out more!</h3>
//         <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Know more</button>
//       </div>

//       {/* Personalized Offers Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold mb-4">Personalized Offers</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Offer 1 */}
//           <div className="border p-4 rounded-lg bg-gray-50 text-center">
//             <h4 className="text-md font-semibold">CREDIT+ Score Improvement Service</h4>
//             <p className="text-gray-600">✔ No hard credit check<br/>✔ Personalized plan<br/>✔ Credit report tracking</p>
//             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">Apply Now</button>
//           </div>
//           {/* Offer 2 */}
//           <div className="border p-4 rounded-lg bg-gray-50 text-center">
//             <h4 className="text-md font-semibold">Paisabazaar StepUp Credit Card</h4>
//             <p className="text-gray-600">✔ Backed by FD<br/>✔ Build your credit score<br/>✔ Credit limit up to 200% of FD Amount</p>
//             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">Apply Now</button>
//           </div>
//           {/* Offer 3 */}
//           <div className="border p-4 rounded-lg bg-gray-50 text-center">
//             <h4 className="text-md font-semibold">Get Loan against your Mutual Fund Portfolio</h4>
//             <p className="text-gray-600">✔ Borrow up to 80% of MF value<br/>✔ No need for closure or insurance exchange</p>
//             <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">Check Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../components/CommonCom/Button";
import { useNavigate } from "react-router-dom";
const sideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Dashboard = () => {
   const navigate = useNavigate();
  return (
    <div className=" p-8 flex flex-col gap-6">
      {/* Credit Score Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sideUp}
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-semibold">Hey Abhishek! Here's your Credit Score for Feb 25</h2>
          <span className="text-gray-500">Next report on: 07 Mar 25</span>
        </div>
        <div className="flex items-center mt-4 gap-6">
          <div className="text-center p-4 border rounded-lg bg-gray-50 w-36">
            <span className="text-4xl font-bold text-red-500">742</span>
            <p className="text-gray-600">Your Score</p>
          </div>
          <div>
            <p className="text-red-500 font-medium">Your Credit Score needs attention!</p>
            <p className="text-gray-600">Kick-start your score improvement journey with Credit Plus</p>
          </div>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Download Report</button>
      </motion.div>

      {/* Other Sections */}
      {["One View of all your Bank Accounts", "You have a Low Credit Score", "Get your Credit Health Report to find out more!"].map(
        (title, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sideUp}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
           <CTAButton active={true} onClick={() => navigate("/credit-report")}>
      View Credit Report
    </CTAButton>
          </motion.div>
        )
      )}

      {/* Personalized Offers Section */}
      <motion.div
        className="bg-gray-100 p-6 rounded-lg shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sideUp}
      >
        <h3 className="text-lg font-semibold mb-4">Personalized Offers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["CREDIT+ Score Improvement Service", "Paisabazaar StepUp Credit Card", "Get Loan against your Mutual Fund Portfolio"].map(
            (offer, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg bg-gray-50 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sideUp}
              >
                <h4 className="text-md font-semibold">{offer}</h4>
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">Apply Now</button>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
