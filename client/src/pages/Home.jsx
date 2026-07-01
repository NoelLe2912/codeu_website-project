import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NavBarHomePage from "../components/NavBarHomePage";
import Hero from "../homeSections/Hero";
import Roadmaps from "../homeSections/Roadmaps";
import Courses from "../homeSections/Courses";
import CodeEditor from "../homeSections/CodeEditor";
import Feedback from "../homeSections/Feedback";
import LogInSignUp from "../homeSections/LogInSignUp";
import Footer from "../homeSections/Footer";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#aboutus") {
      navigate("/aboutus", { replace: true });
    }
  }, [location.hash, navigate]);

  return (
    <div className="max-w-[1440px] mx-auto">
      <NavBarHomePage />
      <Hero />
      <Roadmaps />
      <Courses />
      <CodeEditor />
      <Feedback />
      <LogInSignUp />
      <Footer />
    </div>
  );
};

export default Home;
