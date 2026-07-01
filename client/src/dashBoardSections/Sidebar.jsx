import React from "react";
import homepageIcon from "../assets/images/homepage-icon.png";
import filesIcon from "../assets/images/files.png";
import navigationIcon from "../assets/images/navigation-bar.png";
import settingsIcon from "../assets/images/settings-icon.png";

function Sidebar() {
  const menuItems = [
    { icon: homepageIcon, alt: "Home" },
    { icon: filesIcon, alt: "Files" },
    { icon: navigationIcon, alt: "Menu" },
    { icon: settingsIcon, alt: "Settings" },
  ];

  return (
    <div className="hidden lg:flex bg-gray-100 p-5 flex-col gap-5 items-center">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-yellow-200 hover:scale-110 hover:shadow-lg"
        >
          <img src={item.icon} alt={item.alt} className="w-6 h-6" />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
