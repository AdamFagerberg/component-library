import React from "react";

export default function ButtonComponent({ children, size, color, disabled }) {
  const sizeClasses =
    size === "small"
      ? "py-2 px-4"
      : size === "medium"
      ? "py-4 px-8"
      : size === "large"
      ? "py-10 px-20"
      : "p-4";

  const colorClasses =
    color === "blue"
      ? "bg-blue-400 text-white hover:bg-blue-700"
      : color === "gray"
      ? "bg-gray-400 text-white hover:bg-gray-600"
      : color === "dark"
      ? "bg-slate-900 text-white hover:bg-slate-700"
      : color === "light"
      ? "bg-slate-50 text-black hover:bg-slate-300"
      : color === "red"
      ? "bg-red-600 text-white hover:bg-red-800"
      : "bg-purple-600 text-white hover:bg-purple-800";

  return (
    <button
      disabled={disabled}
      className={`${colorClasses} ${sizeClasses} rounded-xl`}
    >
      {children}
    </button>
  );
}
