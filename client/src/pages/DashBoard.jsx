import React from "react";
import Header from "../dashBoardSections/Header";
import Sidebar from "../dashBoardSections/Sidebar";
import MainContent from "../dashBoardSections/MainContent";
import RightPanel from "../dashBoardSections/RightPanel";

const DashBoard = () => {
  return (
    <div>
      <div className="w-full h-full bg-white min-h-screen m-0 p-0">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr_300px] gap-5">
          <Sidebar />
          <MainContent />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
