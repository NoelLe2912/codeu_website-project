import React, { useContext } from "react";
import { AppContent } from "../context/AppContext";

function ProfileCard() {
  const { userData } = useContext(AppContent);

  return (
    <div className="bg-[radial-gradient(circle_at_center,_#1e40af,_#38bdf8)] rounded-xl p-7 text-center text-white mb-5 w-full max-w-md mx-auto">
      <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
        {userData && userData.avatarUrl ? (
          <img
            src={userData.avatarUrl}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{userData && userData.name ? userData.name[0].toUpperCase() : "U"}</span>
        )}
      </div>
      <div className="text-lg font-semibold mb-1">
        {userData && userData.name ? userData.name : "User Name"}
      </div>
      <div className="text-xs opacity-90 mb-4 font-medium">Students</div>

      <div className="flex justify-between gap-3 mt-4">
        <StatBox value="12" label="Course" />
        <StatBox value="02" label="Completed" />
        <StatBox value="12" label="Hours" />
      </div>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="bg-yellow-400 rounded-lg px-3 py-2 flex-1 text-center transition-all duration-300 hover:bg-yellow-300 hover:scale-105 cursor-pointer shadow-md">
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs font-medium text-white">{label}</div>
    </div>
  );
}

export default ProfileCard;
