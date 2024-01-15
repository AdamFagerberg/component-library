import React from "react";
import { CiCircleInfo, CiWarning } from "react-icons/ci";

export default function AlertComponent({ color, icon, children }) {
  const colorClasses =
    color === "blue"
      ? "bg-blue-200 text-blue-400"
      : color === "gray"
      ? "bg-gray-200 text-grey-400"
      : color === "dark"
      ? "bg-slate-600 text-slate-800"
      : color === "red"
      ? "bg-red-200 text-red-400"
      : "bg-purple-200 text-purple-500";

  const iconClasses =
    icon === "info" ? (
      <CiCircleInfo />
    ) : icon === "warning" ? (
      <CiWarning />
    ) : (
      ""
    );

  return (
    <div className={`${colorClasses} rounded w-1/2 m-5`}>
      {iconClasses}
      {children}
    </div>
  );
}
