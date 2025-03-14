import React from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import { useState } from "react";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});

  return (
    <UpdateStorageContext value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-72  grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 h-screen p-5 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="md:col-span-3 ">
            <LogoPreview />
          </div>
        </div>
      </div>
    </UpdateStorageContext>
  );
};

export default App;
