import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const LogoPreview = () => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
        color={color}
        size={size}
      />
    );
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        style={{
          padding: storageValue?.bgPadding,
        }}
        className="w-[500px] h-[500px] bg-purple-200 outline-dotted outline-purple-300"
      >
        <div
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
          className="h-full w-full flex items-center justify-center "
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
