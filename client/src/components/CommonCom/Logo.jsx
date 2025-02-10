import React from "react";
import { Link } from "react-router-dom"; // If using React Router

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 w-40 mt-5 rounded-lg">
      <img src="/Images/Logo2.png" alt="UpScore Logo" className="w-40 h-10" />
      <p className="text-black font-bold text-3xl">UpScore</p>
    </Link>
  );
};

export default Logo;
