import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import React, { useContext, useEffect, useState } from "react";

const LogoPreview = () => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-[500px] h-[500px] bg-purple-200 outline-dotted outline-purple-300">
        <div
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
          className="h-full w-full "
        ></div>
      </div>
    </div>
  );
};

export default LogoPreview;
