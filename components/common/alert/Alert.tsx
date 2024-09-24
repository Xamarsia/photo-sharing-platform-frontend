import React from "react";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';
import IconButton from "@/components/buttons/IconButton";

type AlertType = "Success" | "Error" | "Warning";

type AlertProps = {
  type: AlertType;
  message: string;
  onClose: () => void;
};

const borderColors = {
  Success: "bg-green-100",
  Error: "bg-red-100",
  Warning: "bg-orange-100",
};


const textColors = {
  Success: "text-green-400",
  Error: "text-red-400",
  Warning: "text-orange-400",
};

export default function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div className={`flex justify-between border items-center p-4 m-2 rounded-lg ${borderColors[type]}`} role="alert">
      <span className={`ms-3 text-sm font-medium ${textColors[type]}`}>
        {message}
      </span>
      <div className="size-6" >
        <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onClose} />
      </div>
    </div>
  );
};
