import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Support = () => {
  const [activeTab, setActiveTab] = useState("submit-query");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Navigation Tabs */}
      <nav className="flex justify-start space-x-6 border-b pb-2 text-gray-600">
        <button onClick={() => setActiveTab("faqs")} className={activeTab === "faqs" ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "hover:text-blue-600"}>FAQs</button>
        <button onClick={() => setActiveTab("submit-query")} className={activeTab === "submit-query" ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "hover:text-blue-600"}>Submit A Query</button>
        <button onClick={() => setActiveTab("contact-us")} className={activeTab === "contact-us" ? "text-blue-600 font-semibold border-b-2 border-blue-600" : "hover:text-blue-600"}>Contact Us</button>
      </nav>

      {/* FAQs Tab Content */}
      {activeTab === "faqs" && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-blue-700">Frequently Asked Questions </h2>
          <p className="text-gray-700 mt-2">Here you can find answers to the most common questions.</p>
        </div>
      )}

      {/* Submit A Query Tab Content */}
      {activeTab === "submit-query" && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-blue-700">You can write to us!</h2>
          <p className="text-gray-700 mt-2">For any queries or feedback, you can write to us by submitting the form below. We will get back to you within 24 hours.</p>
          <div className="mt-4 space-y-4">
            <div className="flex space-x-4">
              <select className="border p-2 rounded w-1/2">
                <option>Select Product</option>
              </select>
              <input type="email" placeholder="Your Email" className="border p-2 rounded w-1/2" value="ambikaprasad2025@gmail.com" readOnly />
            </div>
            <textarea className="border p-2 rounded w-full" placeholder="Describe the issue here*" rows="4"></textarea>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">Submit Query</button>
          </div>
        </div>
      )}

      {/* Contact Us Tab Content */}
      {activeTab === "contact-us" && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-blue-700">How can we help you?</h2>
          <p className="text-gray-700 mt-2">It looks like you are experiencing a problem with our service. Don’t worry! We’re here to help.<br />
            For any query, you can <span className="text-blue-600 cursor-pointer">write to us</span> and we will get back to you within 24 hours.<br />
            Alternatively, you can speak to our customer care team on the number below, between 09:30 AM to 6:30 PM (Mon-Sat).
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-pink-600" />
              <span className="font-semibold">Toll Free:</span>
              <span className="text-blue-700 font-semibold">1800-208-8877</span>
              <span className="text-gray-600">(Mon-Sat 9:30 AM – 6:30 PM)</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-pink-600" />
              <span className="font-semibold">Whatsapp:</span>
              <span className="text-blue-700 font-semibold">851 009 3333</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-pink-600" />
              <span className="font-semibold">Visit Us:</span>
              <span className="text-gray-700">Paisabazaar.com, Plot 135, Sector 44, Gurugram - 122001, Haryana, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-600" />
              <span className="font-semibold">Email:</span>
              <span className="text-blue-700 font-semibold">care@paisabazaar.com</span>
              <span className="text-gray-600">(email to us related to your Credit Report)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
