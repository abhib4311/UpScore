import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/CommonCom/Button";
import { motion } from "framer-motion"; // Import motion for animations

const OtpVerification = () => {
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Redirect if phone is missing
  useEffect(() => {
    if (!phone) navigate("/login");
  }, [phone, navigate]);

  const handleVerify = async () => {
    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", { phone, otp });

      if (response.data.success) {
        const { token } = response.data;
        localStorage.setItem("authToken", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setMessage("OTP Verified! Redirecting...");
        
        setTimeout(() => navigate("/dashboard"), 1500); // Smooth redirect after success message
      } else {
        setError("Invalid OTP, try again!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/send-otp", { phone });

      if (response.data.success) {
        setMessage("New OTP sent successfully!");
      } else {
        setError("Failed to resend OTP. Try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error resending OTP.");
    } finally {
      setResendLoading(false);
    } 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b ">
      {/* Animated OTP Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          OTP Verification
        </motion.h2>

        <motion.p 
          className="text-gray-600 mt-2"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Enter the OTP sent to <span className="font-bold">{phone}</span>
        </motion.p>

        {/* OTP Input Field */}
        <motion.input
          type="text"
          className="mt-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Animated Error & Success Messages */}
        {error && (
          <motion.p className="text-red-500 text-sm mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {error}
          </motion.p>
        )}
        {message && (
          <motion.p className="text-green-500 text-sm mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {message}
          </motion.p>
        )}

        {/* Animated Verify Button */}
        <motion.div 
          className="mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button active={!loading} onClick={handleVerify}>
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </motion.div>

        {/* Resend OTP */}
        <motion.p 
          className="text-gray-500 mt-4 text-sm"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Didn’t receive the OTP?{" "}
          <motion.button
            onClick={handleResendOTP}
            className="text-blue-600 font-medium"
            disabled={resendLoading}
            whileHover={{ scale: 1.1 }}
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </motion.button>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OtpVerification;
