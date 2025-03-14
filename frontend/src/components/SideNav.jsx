import { Image, Shield, UserPen } from "lucide-react";
import React from "react";
import { useState } from "react";

const SideNav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icons: UserPen,
    },
    {
      id: 2,
      name: "Background",
      icons: Image,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="h-screen ">
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-3 text-lg px-7 text-gray-300 my-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-purple-400 hover:text-white ${
              activeIndex == index && "bg-purple-400 text-white"
            }`}
            key={index}
          >
            <menu.icons />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
