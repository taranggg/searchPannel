import React from "react";
import type { ItemType } from "../data/mockData";

// Badge with icon based on the item type
const TypeBadge = ({ type }: { type: ItemType }) => {
  const iconMap: Record<ItemType, string> = {
    people: "👤", // user icon
    folders: "📁", // folder icon
    files: "📄", // file icon
    videos: "🎥", // video icon
  };

  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 text-xl">
      {iconMap[type]}
    </div>
  );
};

export default TypeBadge;
