import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import logo from "../assets/images/logo.png";

function Header() {
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateAvatar = async (file) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const nextUrl = reader.result?.toString() || "";
      try {
        const { data } = await axios.put(
          `${backendUrl}/api/user/profile`,
          { avatarUrl: nextUrl },
          { withCredentials: true },
        );
        if (data.success) {
          setUserData(data.userData);
          toast.success("Profile photo updated");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 md:p-5 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5 text-white text-2xl font-bold">
        <button
          className="w-10 h-10 bg-white rounded-md flex items-center justify-center p-1 hover:opacity-80 transition-opacity"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="codeU Logo"
            className="w-full h-full object-contain"
          />
        </button>
        <button
          className="hover:opacity-80 transition-opacity"
          onClick={() => navigate("/")}
        >
          codeU
        </button>
      </div>

      {/* Right-side: user / login */}
      <div className="flex items-center gap-4">
        {userData ? (
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-500 text-white relative group">
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
            className=" flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all"
          >
            Login <img src={assets.arrow_icon} alt="" />
          </button>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) updateAvatar(file);
        }}
      />
    </div>
  );
}

export default Header;
