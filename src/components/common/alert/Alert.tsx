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

const textColors: { [key: string]: string } = {
  Success: "text-green-400",
  Error: "text-red-400",
  Warning: "text-orange-400",
};

export default function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div className="flex items-center justify-center w-full"> //try to combine 2 divs
      <div className={`flex items-center justify-between border border-gray-100 p-4 m-2 max-w-xl rounded-lg w-full bg-white`} role="alert">
        <span className={`ms-3 text-sm font-medium ${textColors[type]}`}>
          {message}
        </span>
        <div className="size-6" >
          <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
