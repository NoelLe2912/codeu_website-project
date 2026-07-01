import React from "react";
import { useNavigate } from "react-router-dom";

function LessonCard({ category, title }) {
  // Generate a "random" time based on title to ensure consistency
  const randomTime = (Math.abs(title.charCodeAt(0) * 7) % (45 - 5 + 1)) + 5;
  const navigate = useNavigate();

  return (
    <div
      className="relative rounded-2xl p-6 text-white shadow-lg 
                    bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden
                    cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-xl translate-x-10 -translate-y-10"></div>

      <div className="text-xs opacity-90 mb-2 tracking-wide ">{category}</div>
      <div className="text-xl font-bold mb-3">{title}</div>
      <div className="text-sm opacity-90 mb-5">
        Expected time:
        <br />
        {randomTime} minutes
      </div>

      <button
        onClick={() => navigate("/lecture")}
        className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold 
                         shadow-sm transition-all hover:bg-yellow-400 hover:shadow-md hover:scale-105"
      >
        Start
      </button>
    </div>
  );
}

export default LessonCard;
