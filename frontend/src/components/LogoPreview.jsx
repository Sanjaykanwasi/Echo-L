import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      requestAnimationFrame(downloadLogo);
    }
  }, [downloadIcon]);

  const convertOKLCHToRGB = (element) => {
    if (!element) return;

    const styles = window.getComputedStyle(element);

    for (let i = 0; i < styles.length; i++) {
      const property = styles[i];
      const value = styles.getPropertyValue(property);

      if (value.includes("oklch")) {
        console.warn(`OKLCH detected: ${property}: ${value}`);

        element.style.setProperty(property, "rgb(0, 0, 0)", "important");
      }
    }

    Array.from(element.children).forEach(convertOKLCHToRGB);
  };

  const downloadLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    if (!downloadLogoDiv) return;

    convertOKLCHToRGB(downloadLogoDiv);

    setTimeout(() => {
      html2canvas(downloadLogoDiv, {
        backgroundColor: null,
        useCORS: true,
      }).then((canvas) => {
        const pngImage = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngImage;
        downloadLink.download = "echo_sanjay.png";
        downloadLink.click();
      });
    }, 500);
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name] || icons["Heart"];
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
          id="downloadLogoDiv"
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
