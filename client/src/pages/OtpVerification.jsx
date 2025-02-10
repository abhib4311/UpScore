import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/CommonCom/Button";
const OtpVerification = () => {
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone"); // Extract phone number
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Redirect if phone is missing
  useEffect(() => {
    if (!phone) {
      navigate("/login"); // Redirect to home/login if phone is not present
    }
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
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        phone,
        otp,
      });

      console.log("Full Response Data:", response.data); // ✅ Logs full response data

      if (response.data.success) {
        const { token } = response.data;

        // ✅ Store token in localStorage
        localStorage.setItem("authToken", token);

        // ✅ Set token in axios default headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setMessage("OTP Verified! Redirecting...");
        
        navigate("/dashboard"); // ✅ Instantly navigate without delay
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">OTP Verification</h2>
        <p className="text-gray-600 mt-2">
          Enter the OTP sent to <span className="font-bold">{phone}</span>
        </p>

        <input
          type="text"
          className="mt-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
  
        <Button active={!loading} onClick={handleVerify}>
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>

        <p className="text-gray-500 mt-4 text-sm">
          Didn’t receive the OTP?{" "}
          <button
            onClick={handleResendOTP}
            className="text-blue-600 font-medium"
            disabled={resendLoading}
          >
            {resendLoading ? "Resending..." : "Resend OTP"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
