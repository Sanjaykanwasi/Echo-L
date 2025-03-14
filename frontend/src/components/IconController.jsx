import { Heart, Smile } from "lucide-react";
import React from "react";
import { Slider } from "@/components/ui/slider";

const IconController = () => {
  return (
    <div>
      {" "}
      <div>
        <label className="text-white">Icon</label>
        <div className="p-3 cursor-pointer bg-purple-400 my-2 rounded-full w-[50px] h-[50px] flex items-center justify-center">
          <Heart className="text-white" />
        </div>
        <div className="py-2 ">
          <label className="p-2 flex text-white items-center">Size</label>
          <Slider
            className="w-100 h-5 cursor-pointer"
            defaultValue={[280]}
            max={512}
            step={1}
          />
        </div>
        <div className="py-2 ">
          <label className="p-2 flex text-white items-center">Rotate</label>
          <Slider
            className="w-100 h-5 cursor-pointer"
            defaultValue={[0]}
            max={360}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};

export default IconController;
