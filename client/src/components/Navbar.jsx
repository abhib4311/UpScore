// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "./CommonCom/Logo";
// import { FaBars } from "react-icons/fa";
// import Button from "./CommonCom/Button";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isLoggedIn = true; // Replace with actual authentication logic

//   // Function to check if a tab is active
//   const isActive = (path) =>
//     location.pathname === path ? "text-green-600" : "text-gray-900";

//   return (
//     <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-md">
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <Logo />

//         {/* Navbar Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/")}`}>
//             Home
//           </Link>
//           <Link to="/our-mission" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/our-mission")}`}>
//             Our Mission
//           </Link>

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
//               Services
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute bg-white shadow-md rounded-lg w-56">
//                 <ul className="py-2 text-sm text-gray-900">
//                   {[
//                     { name: "Debt Consultation", path: "/services/debt-consultation" },
//                     { name: "Debt Management Plan", path: "/services/debt-management" },
//                     { name: "Secured Loan", path: "/services/secured-loan" },
//                     { name: "Debt solution", path: "/services/debt-solution" },
//                     { name: "Debt Resolution", path: "/services/debt-resolution" },
//                   ].map((service) => (
//                     <li key={service.path}>
//                       <Link to={service.path} className="block px-4 py-2 hover:text-green-600">
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/contact" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/contact")}`}>
//             Contact
//           </Link>
//         </div>

//         {/* Sign In / Dashboard Button */}
//         <div className="hidden md:block">
//           <Button onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")} active={true}>
//             <div className="flex items-center cursor-pointer">
//               {isLoggedIn ? "Dashboard" : "Sign in"}
//             </div>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-green-500 focus:outline-none"
//         >
//           <FaBars className="text-3xl" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden flex flex-col p-4 space-y-3 bg-gray-50">
//           <Link to="/" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/")}`}>
//             Home
//           </Link>
//           <Link to="/our-mission" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/our-mission")}`}>
//             Our Mission
//           </Link>
//           <Link to="/services" className="py-2 px-3 font-medium hover:text-green-600">
//             Services
//           </Link>
//           <Link to="/contact" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/contact")}`}>
//             Contact
//           </Link>
//           <Button onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")} active={true}>
//             <div className="flex items-center cursor-pointer">
//               {isLoggedIn ? "Dashboard" : "Sign in"}
//             </div>
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "./CommonCom/Logo";
// import { FaBars } from "react-icons/fa";
// import Button from "./CommonCom/Button";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isPlansOpen, setIsPlansOpen] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isLoggedIn = true; // Replace with actual authentication logic

//   const isActive = (path) =>
//     location.pathname === path ? "text-green-600" : "text-gray-900";

//   return (
//     <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-md">
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <Logo />

//         {/* Navbar Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/")}`}>
//             Home
//           </Link>

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsServicesOpen(true)}
//             onMouseLeave={() => setIsServicesOpen(false)}
//           >
//             <button className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
//               Services
//             </button>
//             {isServicesOpen && (
//               <div className="absolute bg-white shadow-md rounded-lg w-56">
//                 <ul className="py-2 text-sm text-gray-900">
//                   {[
//                     { name: "Credit Score & Report", path: "/services/credit-score" },
//                     { name: "Debt Consultation & Management", path: "/services/debt-consultation" },
//                     { name: "Harassment Relief", path: "/services/harassment-relief" },
//                     { name: "Debt Management & Solution", path: "/services/debt-solution" },
//                     { name: "Secured Loan for Single Debt", path: "/services/secured-loan" },
//                   ].map((service) => (
//                     <li key={service.path}>
//                       <Link to={service.path} className="block px-4 py-2 hover:text-green-600">
//                         {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Plans Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsPlansOpen(true)}
//             onMouseLeave={() => setIsPlansOpen(false)}
//           >
//             <button className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
//               Plans
//             </button>
//             {isPlansOpen && (
//               <div className="absolute bg-white shadow-md rounded-lg w-56">
//                 <ul className="py-2 text-sm text-gray-900">
//                   {[
//                     { name: "Free Plan", path: "/plans/free" },
//                     { name: "Gold Plan ($59)", path: "/plans/gold" },
//                     { name: "Platinum Plan ($499)", path: "/plans/platinum" },
//                   ].map((plan) => (
//                     <li key={plan.path}>
//                       <Link to={plan.path} className="block px-4 py-2 hover:text-green-600">
//                         {plan.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/about" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/about")}`}>
//             About Us
//           </Link>
//           <Link to="/contact" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/contact")}`}>
//             Contact
//           </Link>
//         </div>

//         {/* Sign Up / Login Button */}
//         <div className="hidden md:block">
//           <Button onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")} active={true}>
//             <div className="flex items-center cursor-pointer">
//               {isLoggedIn ? "Dashboard" : "Sign Up / Login"}
//             </div>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-green-500 focus:outline-none"
//         >
//           <FaBars className="text-3xl" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden flex flex-col p-4 space-y-3 bg-gray-50">
//           <Link to="/" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/")}`}>
//             Home
//           </Link>
//           <Link to="/services" className="py-2 px-3 font-medium hover:text-green-600">
//             Services
//           </Link>
//           <Link to="/plans" className="py-2 px-3 font-medium hover:text-green-600">
//             Plans
//           </Link>
//           <Link to="/about" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/about")}`}>
//             About Us
//           </Link>
//           <Link to="/contact" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/contact")}`}>
//             Contact
//           </Link>
//           <Button onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")} active={true}>
//             <div className="flex items-center cursor-pointer">
//               {isLoggedIn ? "Dashboard" : "Sign Up / Login"}
//             </div>
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./CommonCom/Logo";
import { FaBars } from "react-icons/fa";
import Button from "./CommonCom/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPlansDropdownOpen, setPlansDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const isLoggedIn = true; // Replace with actual authentication logic

  const isActive = (path) =>
    location.pathname === path ? "text-green-600" : "text-gray-900";

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Logo />

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/our-mission" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/our-mission")}`}>
            Our Mission
          </Link>

          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md rounded-lg w-56">
                <ul className="py-2 text-sm text-gray-900">
                  {[{ name: "Credit Score & Report", path: "/services/credit-score" },
                    { name: "Debt Consultation & Management", path: "/services/debt-consultation" },
                    { name: "Harassment Relief", path: "/services/harassment-relief" },
                    { name: "Debt Management & Solution", path: "/services/debt-solution" },
                    { name: "Secured Loan for Single Debt", path: "/services/secured-loan" }].map((service) => (
                    <li key={service.path}>
                      <Link to={service.path} className="block px-4 py-2 hover:text-green-600">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setPlansDropdownOpen(true)} onMouseLeave={() => setPlansDropdownOpen(false)}>
            <button className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
              Plans
            </button>
            {isPlansDropdownOpen && (
              <div className="absolute bg-white shadow-md rounded-lg w-56">
                <ul className="py-2 text-sm text-gray-900">
                  {[{ name: "Free Plan", path: "/plans/free" },
                    { name: "Gold Plan ($59)", path: "/plans/gold" },
                    { name: "Platinum Plan ($499)", path: "/plans/platinum" }].map((plan) => (
                    <li key={plan.path}>
                      <Link to={plan.path} className="block px-4 py-2 hover:text-green-600">
                        {plan.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/contact" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/contact")}`}>
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Button onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")} active={true}>
            <div className="flex items-center cursor-pointer">
              {isLoggedIn ? "Dashboard" : "Sign in"}
            </div>
          </Button>
        </div>

        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-green-500 focus:outline-none">
          <FaBars className="text-3xl" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col p-4 space-y-3 bg-gray-50">
          <Link to="/" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/our-mission" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/our-mission")}`}>
            Our Mission
          </Link>
          <button onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")} className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
            Services
          </button>
          {mobileDropdown === "services" && (
            <div className="pl-4">
              {[{ name: "Credit Score & Report", path: "/services/credit-score" },
                { name: "Debt Consultation & Management", path: "/services/debt-consultation" },
                { name: "Harassment Relief", path: "/services/harassment-relief" },
                { name: "Debt Management & Solution", path: "/services/debt-solution" },
                { name: "Secured Loan for Single Debt", path: "/services/secured-loan" }].map((service) => (
                <Link key={service.path} to={service.path} className="block px-4 py-2 hover:text-green-600">
                  {service.name}
                </Link>
              ))}
            </div>
          )}
          <button onClick={() => setMobileDropdown(mobileDropdown === "plans" ? null : "plans")} className="py-2 px-3 font-medium hover:text-green-600 text-gray-900">
            Plans
          </button>
          {mobileDropdown === "plans" && (
            <div className="pl-4">
              {[{ name: "Free Plan", path: "/plans/free" },
                { name: "Gold Plan ", path: "/plans/gold" },
                { name: "Platinum Plan ", path: "/plans/platinum" }].map((plan) => (
                <Link key={plan.path} to={plan.path} className="block px-4 py-2 hover:text-green-600">
                  {plan.name}
                </Link>
              ))}
            </div>
          )}
          <Link to="/contact" className={`py-2 px-3 font-medium hover:text-green-600 ${isActive("/contact")}`}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
