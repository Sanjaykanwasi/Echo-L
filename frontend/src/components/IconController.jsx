import { Heart, Smile } from "lucide-react";
import React from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { useState, useEffect } from "react";

const IconController = () => {
  const [color, setColor] = useState("#fff");
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const storageValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "Heart",
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [color, size, rotate]);

  return (
    <div>
      {" "}
      <div>
        <label className="text-white">Icon</label>
        <div className="p-3 cursor-pointer bg-purple-400 my-2 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <Heart className="text-white" />
        </div>
        <div className="py-2 ">
          <label className="p-2 flex justify-between text-white items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            className="cursor-pointer"
            defaultValue={[280]}
            onValueChange={(event) => setSize(event[0])}
            max={512}
            step={1}
          />
        </div>

        <div className="py-2 ">
          <label className="p-2 flex justify-between text-white items-center">
            Rotate <span>{rotate} °</span>
          </label>

          <Slider
            className=" cursor-pointer"
            defaultValue={[0]}
            onValueChange={(event) => setRotate(event[0])}
            max={360}
            step={1}
          />
        </div>

        <div className="py-2 ">
          <label className="p-2 flex text-white items-center">Icon Color</label>
          <ColorPickerController
            selectedColor={(color) => setColor(color)}
            hideController={true}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
