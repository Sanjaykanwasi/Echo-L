import React, { useEffect, useState, useContext } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div>
      <div className="py-2 ">
        <label className="p-2 flex justify-between text-white items-center">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          className="cursor-pointer"
          defaultValue={[90]}
          onValueChange={(event) => setRounded(event[0])}
          max={512}
          step={1}
        />
      </div>
      <div className="py-2 ">
        <label className="p-2 flex justify-between text-white items-center">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          className="cursor-pointer"
          defaultValue={[40]}
          onValueChange={(event) => setPadding(event[0])}
          max={100}
          step={1}
        />
      </div>
      <div className="py-2 ">
        <label className="p-2 flex text-white items-center">Icon Color</label>
        <ColorPickerController
          selectedColor={(color) => setColor(color)}
          hideController={false}
        />
      </div>
    </div>
  );
};

export default BackgroundController;
