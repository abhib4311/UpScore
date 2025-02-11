import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Support = () => {
  const [activeTab, setActiveTab] = useState("submit-query");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Navigation Tabs */}
      <nav className="flex justify-start space-x-6 border-b pb-2 text-gray-600">
        {["submit-query", "contact-us"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "hover:text-green-600"
            }`}
          >
            {tab === "submit-query" ? "Submit A Query" : "Contact Us"}
          </button>
        ))}
      </nav>

      {/* Tab Content with Slide Up Animation */}
      <AnimatePresence mode="wait">
        {activeTab === "submit-query" && (
          <motion.div
            key="submit-query"
            className="mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold text-green-600">You can write to us!</h2>
            <p className="text-gray-700 mt-2">
              For any queries or feedback, you can write to us by submitting the form below. We will get back to you within 24 hours.
            </p>
            <div className="mt-4 space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded w-full"
                value="ambikaprasad2025@gmail.com"
                readOnly
              />
              <textarea
                className="border p-2 rounded w-full"
                placeholder="Describe the issue here*"
                rows="4"
              ></textarea>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Submit Query
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === "contact-us" && (
          <motion.div
            key="contact-us"
            className="mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="mt-10">
          <h2 className="text-2xl font-bold text-green-500 mb-5">How can we help you?</h2>
          {/* <p className='border-b-4 rounded-2xl w-20 border-red-500 '></p> */}
          <p className="text-gray-700 mt-2">It seems you're facing an issue with our service. No worries! We're here to assist you.
          You can reach out to us by writing, and we'll respond within 24 hours. Alternatively, you can contact our customer care team at the number below, available from 9:30 AM to 6:30 PM (Monday to Saturday).
          </p>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 px-5 space-y-2">
            <div className="flex flex-col text-start">
              <div className='flex items-center space-x-3'>
                <FaPhoneAlt className="text-pink-600" />
                <p className="font-semibold">Toll Free:</p>
                <p className="text-green-500 font-semibold">1800-208-8877</p>
              </div>
              <div>
                <p className="text-gray-600 ml-7">Support available Monday to Saturday, 9:30 AM – 6:30 PM.</p>
              </div>
            </div>

            <div className="flex flex-col space-x-2 text-start">
              <div className='flex items-center space-x-3'>
                <FaWhatsapp className="text-pink-600" />
                <p className="font-semibold">Whatsapp:</p>
                <p className="text-green-500 font-semibold">983 835 4272</p>
              </div>
              <div>
                <p className="text-gray-600 ml-7">You can also contact us through WhatsApp.</p>
              </div>
            </div>
            
            <div className="flex flex-col space-x-2 text-start">
              <div className='flex items-center space-x-3'>
                <FaMapMarkerAlt className="text-pink-600" />
                <p className="font-semibold">Visit Us:</p>
                {/* <p className="text-green-500 font-semibold"></p> */}
              </div>
              <div>
                <p className="text-gray-600 ml-7"> UpScore.com, Plot 135, Sector 44, Gurugram - 122001, Haryana, India</p>
              </div>
            </div>

            <div className="flex flex-col space-x-2 text-start">
              <div className='flex items-center space-x-3'>
                <FaEnvelope className="text-pink-600" />
                <p className="font-semibold">Email:</p>
                <p className="text-green-500 font-semibold">care@upscore.com</p>
              </div>
              <div>
                <p className="text-gray-600 ml-7">Send us an email regarding your Credit Report.</p>
              </div>
            </div>

          </div>
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Support;
