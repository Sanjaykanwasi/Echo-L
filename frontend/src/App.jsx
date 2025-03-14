import React from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import { useState } from "react";
import BackgroundController from "./components/BackgroundController";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <div>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-2 p-5 h-screen ">
          {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3 bg-pink-400">Preview</div>
      </div>
    </div>
  );
};

export default App;
