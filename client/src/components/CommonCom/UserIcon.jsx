import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DropdownMenu = ({ isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md focus:outline-none"
      >
        Account
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg">
          <ul className="py-2">
            <li>
              <button
                onClick={() => navigate("/dashboard")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </button>
            </li>
            {isLoggedIn && (
              <li>
                <button
                  onClick={onLogout}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
