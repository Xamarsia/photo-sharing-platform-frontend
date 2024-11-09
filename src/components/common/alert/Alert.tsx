import React from "react";

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';
import IconButton from "@/components/buttons/IconButton";

type AlertType = "Success" | "Error" | "Warning";

type Props = {
  type: AlertType;
  message: string;
  onClose: () => void;
};

const textColors: { [key: string]: string } = {
  Success: "text-green-400",
  Error: "text-red-400",
  Warning: "text-orange-400",
};

export default function Alert({ type, message, onClose }: Props) {
  return (
    <div role="alert"
      className={`flex items-center justify-between border 
        border-gray-100 p-4 m-2 max-w-xl rounded-lg w-full 
        bg-white ms-3 text-sm font-medium ${textColors[type]}`}
      >
      {message}
      <div className="size-6" >
        <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onClose} />
      </div>
    </div>
  );
};
