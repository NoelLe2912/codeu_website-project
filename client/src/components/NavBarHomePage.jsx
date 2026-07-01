import React, { useEffect, useState, useContext } from "react";
import logo from "../assets/images/logo.png";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function NavBarHomePage({ logoSize = 56 }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // prevent body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="px-8 py-4 w-full">
      <nav className="max-w-full mx-auto px-4 py-4 flex justify-between items-center bg-blue-200 rounded-md">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            width={logoSize}
            height={logoSize}
            alt="CodeU Logo"
            className="w-auto"
            style={{ height: logoSize }}
          />
        </button>

        <div className="flex justify-between items-center gap-16 flex-1 max-md:hidden">
          <ul className="flex-1 flex justify-center items-center gap-16 text-gray-900">
            {navLinks.map((link) => (
              <li key={link.href}>
                {location.pathname === "/" ? (
                  <a
                    href={link.href}
                    className="font-bold text-xl text-black visited:text-black hover:!text-blue-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate(`/${link.href}`)}
                    className="font-bold text-xl text-black hover:!text-blue-600 transition-colors"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {userData ? (
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-700 text-white relative group">
              {userData.avatarUrl ? (
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={userData.avatarUrl}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <p className="font-bold">{userData.name[0].toUpperCase()}</p>
              )}
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10 ">
                <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded-sm">
                  {!userData.isAccountVerified && (
                    <li
                      onClick={sendVerificationOtp}
                      className="py-1 px-3 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                    >
                      Verify email
                    </li>
                  )}
                  <li
                    onClick={() => navigate("/")}
                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    Home
                  </li>
                  <li
                    onClick={() => navigate("/dashboard")}
                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    Dashboard
                  </li>
                  <li
                    onClick={() => navigate("/profile")}
                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    Profile
                  </li>

                  <li
                    onClick={logout}
                    className="py-1 px-3 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-yellow-300 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold text-xl"
            >
              Log In
            </button>
          )}
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="md:hidden"
        >
          <img src={hamburger} alt="Menu" width="28" height="28" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 h-full w-64 bg-blue-100 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-300">
          <h2 className="text-2xl font-bold text-blue-600">Menu</h2>
          <button
            aria-label="Close menu"
            className="text-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            {userData ? (
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-blue-700 text-white">
                <p className="font-bold">{userData.name[0].toUpperCase()}</p>
              </div>
            ) : (
              <button
                className="bg-yellow-300 w-full py-2 rounded-lg hover:bg-blue-700 transition font-bold"
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
              >
                Log In
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
