import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginImage from "/Images/Login.jpg";
import Logo from "../components/CommonCom/Logo";
import Button from "../components/CommonCom/Button";
import { motion } from "framer-motion";  // Import motion from framer-motion

const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // Indian Phone Number Regex: Ensures 10-digit valid mobile numbers
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill all required fields!");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number!");
      return;
    }

    if (!isChecked) {
      alert("You must agree to the terms and conditions to proceed.");
      return;
    }

    setLoading(true);

    try {
      const formattedPhone = `+91${phone}`;
      
      const response = await axios.post("http://localhost:5000/api/auth/send-otp", {
        name,
        phone: formattedPhone,
      });

      if (response.data.success) {
        navigate(`/otp-verification?phone=${encodeURIComponent(formattedPhone)}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(error.response?.data?.message || "An error occurred while sending OTP!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b ">
      <motion.div 
        className="h-150 rounded-lg shadow-lg p-20 flex flex-col"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeInOut" }} // Slower animation with longer duration
      >
        <motion.div 
          className="flex  mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}  // Slower logo appearance with moderate delay
        >
          <Logo />
        </motion.div>

        <motion.div 
          className="flex flex-row gap-3 justify-center items-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} // Slower appearance for form container
        >
          <div className="w-100 pr-8 from-white to-green-100">
            <h1 className="text-3xl font-medium mb-2 text-center">Create an account</h1>
            <p className="text-sm text-gray-600 mb-6 text-center">Get personal assistance now</p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }} // Slower input field appearance
              >
                <label className="block text-sm font-medium text-gray-700">
                  Full name (as per PAN card) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jessica Doe"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </motion.div>

              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.5 }} // Slower appearance for second input
              >
                <label className="block text-sm font-medium text-gray-700">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                    +91
                  </span>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="6548989462"
                    className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }} // Slower appearance for checkbox
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                />
                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="w-full text-center"
                whileHover={{ scale: 1.05 }} // Hover animation for the button
                whileTap={{ scale: 0.95 }} // Tap effect
              >
                <Button active={!loading} onClick={handleSubmit}>
                  {loading ? "Sending OTP..." : "Sign in"}
                </Button>
              </motion.div>
            </form>
          </div>

          <div className="w-140">
            <motion.img 
              src={LoginImage} 
              alt="Login" 
              className="rounded-lg"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.4 }}  // Slower image appearance with delay
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
