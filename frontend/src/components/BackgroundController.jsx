import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = () => {
  const [rounded, setRounded] = useState(90);
  const [color, setColor] = useState("#fff");
  const [padding, setPadding] = useState(40);
  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
  });

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
