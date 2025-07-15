import React from "react";

export default function Button({
  childern,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  clssName = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${clssName}`}
      {...props}
    >
      {childern}
    </button>
  );
}
