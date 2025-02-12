import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-900 px-6 md:px-16 lg:px-24 py-10">
      {/* Section 1: Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl font-bold">Contact Us Today For FREE Consultation.</h1>
          <p className="mt-2 text-lg">Take the First Step Towards Freedom from Debt!</p>
        </div>
        <div className="bg-green-600 w-1/3 h-48 flex items-center justify-center text-white">
          {/* Image can be placed here */}
          <p>Image Placeholder</p>
        </div>
      </div>
      
      {/* Section 2: Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col space-y-4 text-lg">
          <p>📱 <span className="font-semibold">+91 (961) 910-3594</span></p>
          <p>☎️ <span className="font-semibold">022 6876 2652</span></p>
        </div>
        <div className="flex flex-col space-y-4 text-lg">
          <p>📧 <span className="font-semibold">info@upscore.in</span></p>
          <p>📍 Plot No.1, Shah Industrial Estate, Veera Desai Rd, near Ghanshyam Industrial Estate, Andheri West, Mumbai, Maharashtra 400053</p>
        </div>
      </div>
      
      {/* Section 3: Contact Form */}
      <div className="bg-gray-100 p-10 mt-10 rounded-lg shadow-md">
        <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="p-4 border rounded-md" />
          <input type="email" placeholder="Email Address" className="p-4 border rounded-md" />
          <input type="text" placeholder="City Name" className="p-4 border rounded-md" />
          <input type="text" placeholder="Phone Number" className="p-4 border rounded-md" />
          <textarea placeholder="Leave a message" className="p-4 border rounded-md md:col-span-2"></textarea>
          <button className="bg-green-600 text-white py-4 px-6 rounded-md md:col-span-2">Submit</button>
        </form>
      </div>

      {/* Section 4: Google Map */}
      <div className="h-96 w-full mt-10 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.220981726309!2d77.07375607536149!3d28.592140275698894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bb2484e39f3%3A0x20c318b198e4f469!2sVipul%20Agora%2C%20Sector%2028%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1707767112796!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
