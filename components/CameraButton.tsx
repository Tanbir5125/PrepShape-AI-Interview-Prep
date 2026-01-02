"use client";

import { cn } from "@/lib/utils";

interface CameraButtonProps {
  isActive: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const CameraButton = ({
  isActive,
  onClick,
  disabled = false,
}: CameraButtonProps) => {
  return (
    <button
      className={cn(
        "relative btn-call transition-colors",
        isActive && "bg-red-600 hover:bg-red-700",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative">
        {isActive ? "Stop Camera" : "Start Camera"}
      </span>
    </button>
  );
};

export default CameraButton;
