import React from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useToggle from "../../Hooks/useToggle";
import { clearUserInfo } from "../../store/userSlice";
import logo from "../../assets/UKE-Logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { isOpen: menuOpen, toggle: toggleMenu } = useToggle();

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-black hover:text-green-600 transition";

  return (
    <nav className="bg-white px-3 sm:px-6 py-2 rounded-full shadow-md flex justify-between items-center mx-2 sm:mx-4 mt-4 relative z-50">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-10" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-6 text-sm">
        <NavLink to="/home" className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>
        <NavLink to="/contact" className={navLinkClasses}>
          Contact
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex items-center gap-1 ${
              isActive
                ? "text-green-600"
                : "text-black hover:text-green-600 transition"
            }`
          }
        >
          <FiShoppingCart className="text-lg" />
          Cart
        </NavLink>
        {/* <NavLink to="/profile" className={navLinkClasses}>
          Profile
        </NavLink> */}

        {/* {!user ? (
          <NavLink
            to="/signin"
            className="bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition"
          >
            Sign In
          </NavLink>
        ) : (
          <>
            <NavLink to="/profile" className={navLinkClasses}>
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition cursor-pointer"
            >
              Logout
            </button>
          </>
        )} */}
      </div>

      {/* Mobile Cart & Menu */}
      <div className="flex items-center gap-2 lg:hidden">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `p-2 rounded-full ${
              isActive
                ? "text-green-600 bg-green-50"
                : "text-black hover:text-green-600 hover:bg-gray-50 transition"
            }`
          }
        >
          <FiShoppingCart className="text-xl" />
        </NavLink>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-gray-50 transition"
        >
          {menuOpen ? (
            <FiX className="text-xl text-black" />
          ) : (
            <FiMenu className="text-xl text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="text-xl font-sans font-bold text-green-600">UKE</div>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-50 transition"
          >
            <FiX className="text-xl text-black" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col p-4 space-y-1">
          <NavLink
            to="/home"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-base ${
                isActive
                  ? "text-green-600 font-semibold bg-green-50"
                  : "text-black hover:text-green-600 hover:bg-gray-50 transition"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-base ${
                isActive
                  ? "text-green-600 font-semibold bg-green-50"
                  : "text-black hover:text-green-600 hover:bg-gray-50 transition"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-base ${
                isActive
                  ? "text-green-600 font-semibold bg-green-50"
                  : "text-black hover:text-green-600 hover:bg-gray-50 transition"
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            onClick={toggleMenu}
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-base ${
                isActive
                  ? "text-green-600 font-semibold bg-green-50"
                  : "text-black hover:text-green-600 hover:bg-gray-50 transition"
              }`
            }
          >
            <FiShoppingCart className="text-lg" />
            Cart
          </NavLink>
          {/* <NavLink
            to="/profile"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-base ${
                isActive
                  ? "text-green-600 font-semibold bg-green-50"
                  : "text-black hover:text-green-600 hover:bg-gray-50 transition"
              }`
            }
          >
            Profile
          </NavLink> */}

          {/* Mobile Menu Actions */}
          {/* <div className="pt-4 mt-4 border-t space-y-2">
            {!user ? (
              <NavLink
                onClick={toggleMenu}
                to="/signin"
                className="block w-full bg-green-600 text-white text-center px-4 py-3 rounded-lg hover:bg-green-700 transition font-medium"
              >
                Sign In
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/profile"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base ${
                      isActive
                        ? "text-green-600 font-semibold bg-green-50"
                        : "text-black hover:text-green-600 hover:bg-gray-50 transition"
                    }`
                  }
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition font-medium"
                >
                  Logout
                </button>
              </>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
