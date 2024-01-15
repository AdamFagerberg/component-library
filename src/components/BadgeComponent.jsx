import React from "react";

import { RiTimer2Line } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";

export default function BadgeComponent({ color, size, icon, children }) {
  const colorClasses =
    color === "blue"
      ? "bg-blue-200 text-blue-400"
      : color === "gray"
      ? "bg-gray-200 text-grey-400"
      : color === "green"
      ? "bg-green-300 text-green-800"
      : color === "red"
      ? "bg-red-200 text-red-800"
      : "bg-purple-200 text-purple-800";

  const sizeClasses =
    size === "small"
      ? "text-xs p-1"
      : size === "medium"
      ? "text-sm p-1"
      : size === "large"
      ? "text-base p-1"
      : "text-xs p-1";

  const iconClasses =
    icon === "check" ? (
      <IoIosCheckmark />
    ) : icon === "timer" ? (
      <RiTimer2Line />
    ) : (
      ""
    );

  return (
    <div className={`${colorClasses} ${sizeClasses} rounded inline-block `}>
      {iconClasses}
      {children}
    </div>
  );
}
