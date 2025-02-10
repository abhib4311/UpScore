import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./CommonCom/Logo";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine , RiArrowDropUpLine} from "react-icons/ri";
import Button from "./CommonCom/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (


    <nav className="bg-white border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2">
            <Button onClick={() => navigate("/login")} active={true}>
              <div className="flex items-center cursor-pointer ">
                Sign in
                {/* <FaArrowRight /> */}
              </div>
            </Button>
          </div>
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 items-center justify-center text-gray-500 rounded-lg hover:bg-green-500 focus:outline-none"
        >
          <FaBars className="text-3xl"/>
        </button>
        
        {/* Navbar links */}
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-8 w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg bg-gray-50 md:bg-white ">
            
            {/* Dropdown */}
            
          <li className="relative">
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className="relative inline-block"
            >
              <button className="flex items-center py-2 px-3 text-gray-900 md:hover:text-green-500">
                Dropdown
                {isDropdownOpen ? (
                  <RiArrowDropDownLine className="text-xl" />
                ) : (
                  <RiArrowDropUpLine className="text-xl" />
                )}
              </button>

              {isDropdownOpen && (
                <div className="absolute bg-white  shadow-md rounded-lg w-44">
                  <ul className="py-2 text-sm text-gray-700 ">
                    <li>
                      <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200 ">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/earnings" className="block px-4 py-2 hover:bg-gray-200 ">
                        Earnings
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>

            
            <li><a href="#" className="block py-2 px-3 text-gray-900  md:hover:text-green-500 ">Services</a></li>
            <li><a href="#" className="block py-2 px-3 text-gray-900  md:hover:text-green-500 ">Contact</a></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
