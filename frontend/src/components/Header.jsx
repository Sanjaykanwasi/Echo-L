import React from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="p-10  flex justify-between items-center">
      <img src={logo} width={100} height={100} alt="Logo" />
      <Button
        className="bg-purple-600 text-white cursor-pointer"
        variant="link"
      >
        Download Logo
        <Download />
      </Button>
    </div>
  );
};

export default Header;
