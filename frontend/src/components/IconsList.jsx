import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, icons } from "lucide-react";
import { iconList } from "@/constants/icons";

const IconsList = ({ selectedIcon }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Heart");

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };

  return (
    <div>
      <div>
        <label className="text-white">Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-purple-400 my-2 rounded-full w-[50px] h-[50px] flex items-center justify-center"
        >
          <Icon name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                {iconList.map((icon, index) => (
                  <div
                    className="border p-3 flex rounded-sm items-c  justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                    key={index}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconsList;
