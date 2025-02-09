import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Import React Router hooks
import {
  LayoutDashboard,
  Info,
  LifeBuoy,
  ShoppingBag,
  User,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Logo from "./CommonCom/Logo";

const Sidebar = () => {
  const [open, setOpen] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMenu = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden fixed top-4 left-4 p-2 bg-gray-100 rounded-md shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen w-64 bg-gray-100 p-4 flex flex-col fixed top-0 left-0 transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo & Close Button */}
        <div className="flex justify-between items-center">
          <Logo />
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 mx-4 mt-8">
          <div className="space-y-2">
            {/* Dashboard */}
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                isActive("/dashboard") ? "bg-green-600 text-white" : "hover:bg-green-400"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" /> Dashboard
            </Link>

            {/* FAQs */}
            <Link
              to="/faqs"
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                isActive("/faqs") ? "bg-green-600 text-white" : "hover:bg-green-400"
              }`}
            >
              <Info className="h-5 w-5" /> FAQs
            </Link>

            {/* Support */}
            <Link
              to="/support"
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                isActive("/support") ? "bg-green-600 text-white" : "hover:bg-green-400"
              }`}
            >
              <LifeBuoy className="h-5 w-5" /> Support
            </Link>

            {/* Plans (Dropdown) */}
            <button
              className="flex items-center justify-between w-full p-3 rounded-md hover:bg-green-400"
              onClick={() => toggleMenu("plans")}
            >
              <span className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5" /> Plans
              </span>
              {open === "plans" ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            {open === "plans" && (
              <div className="ml-8 space-y-2">
                <Link
                  to="/golden"
                  className={`p-2 block rounded-md cursor-pointer ${
                    isActive("/plans/golden") ? "bg-green-600 text-white" : "hover:bg-green-400"
                  }`}
                >
                  Golden
                </Link>
                <Link
                  to="/plans/premium"
                  className={`p-2 block rounded-md cursor-pointer ${
                    isActive("/plans/premium") ? "bg-green-600 text-white" : "hover:bg-green-400"
                  }`}
                >
                  Premium
                </Link>
              </div>
            )}

            <div className="border-t border-green-400 my-4"></div>

            {/* Profile */}
            <Link
              to="/profile"
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                isActive("/profile") ? "bg-green-600 text-white" : "hover:bg-green-400"
              }`}
            >
              <User className="h-5 w-5" /> Profile
            </Link>

            {/* Logout */}
            <p className="flex items-center gap-3 p-3 cursor-pointer hover:bg-red-600 text-red-600 hover:text-white rounded-md">
              <LogOut className="h-5 w-5" /> Log Out
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
