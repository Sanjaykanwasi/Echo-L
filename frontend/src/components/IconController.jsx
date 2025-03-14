import { Heart } from "lucide-react";
import React, { useContext } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { useState, useEffect } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconsList from "./IconsList";

const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Heart");

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [color, size, rotate, icon]);

  return (
    <div>
      {" "}
      <div>
        <IconsList selectedIcon={(icon) => setIcon(icon)} />
        <div className="py-2 ">
          <label className="p-2 flex justify-between text-white items-center">
            Size <span>{size} px</span>
          </label>
          <Slider
            className="cursor-pointer"
            defaultValue={[size]}
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
            defaultValue={[rotate]}
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
