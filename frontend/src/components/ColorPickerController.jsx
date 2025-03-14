import React, { useState, useEffect } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideController = false, selectedColor }) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  useEffect(() => {
    selectedColor(color);
  }, [color]);

  return (
    <div>
      <ColorPicker
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
        value={color}
        onChange={(e) => {
          if (e !== color) {
            setColor(e);
          }
        }}
      />
    </div>
  );
};

export default ColorPickerController;
