import React from "react";
import { useNavigate } from "react-router-dom";
import dashboardImg from "../assets/images/dashboard.jpg";

const LogInSignUp = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-16 px-8 flex flex-col gap-0">
      <section className="mt-4">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center">
          Log In / Sign Up
        </h2>
        <h3 className="text-xl text-black mt-4 max-w-3xl mx-auto leading-relaxed text-center">
          Create a free account to track your progress and get access to more
          features and learning materials.
        </h3>

        <div className="flex justify-center mt-6">
          <img
            src={dashboardImg}
            alt="Login concept landing page"
            className="w-full h-auto rounded-xl shadow-[0_4px_8px_0_rgba(37,99,235,0.4)] object-cover"
          />
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/login?signup=true")}
            className="bg-yellow-300 text-black px-12 py-4 rounded-lg hover:bg-blue-700 transition text-2xl font-bold"
          >
            Sign Up for Free
          </button>
        </div>
      </section>
    </section>
  );
};

export default LogInSignUp;
