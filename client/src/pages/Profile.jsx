import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaHome, FaIdCard, FaCalendar, FaPhone, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Profile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="p-6 bg-white items-center justify-center mt-5"
    >
      <h1 className="text-2xl font-bold ml-40">Welcome! Sandip</h1>
      
      {/* Personal Details Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg items-center mt-10"
      >
        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center space-x-2"><FaUser className="text-green-500" /><span className="font-medium">Mr. Sandip Kushwaha</span></div>
          <div className="flex items-center space-x-2"><FaCalendar className="text-green-500" /><span>05-11-2003</span></div>
          <div className="flex items-center space-x-2"><FaEnvelope className="text-green-500" /><span>sandipkushwaha2437@Gmail.Com</span></div>
          <div className="flex items-center space-x-2"><FaPhone className="text-green-500" /><span>+91 79XXXXXXX92</span></div>
          <div className="flex items-center space-x-2"><FaHome className="text-green-500" /><span>SHANTI NAGAR SHANTI NAGAR ...</span></div>
          <div className="flex items-center space-x-2"><FaMapMarkerAlt className="text-green-500" /><span>210001 <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-sm">Banda</span></span></div>
          <div className="flex items-center space-x-2"><FaIdCard className="text-green-500" /><span>GHXXXXXX2B</span></div>
        </div>
      </motion.div>

      {/* Employment Details Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg items-center space-y-6 mt-10"
      >
        <h2 className="text-xl font-semibold mb-4">Employment Details</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center space-x-2"><FaBriefcase className="text-green-500" /><span>Salaried</span></div>
          <div className="flex items-center space-x-2"><FaBriefcase className="text-green-500" /><span>Sequoia Capital India Advisors Pvt...</span></div>
          <div className="flex items-center space-x-2"><span className="text-lg font-semibold">₹ 25,000</span></div>
        </div>
        <p className="text-gray-500 text-sm mt-4">Note: Please enter correct details to get accurate loan and credit card offers.</p>
      </motion.div>
    </motion.div>
  );
}

export default Profile;
