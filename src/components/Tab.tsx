import React from "react";

const Tab = ({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        active ? "bg-zinc-900 text-white" : "bg-white text-zinc-700"
      }`}
    >
      {label}
      <span className="ml-2 text-xs bg-zinc-300 px-2 rounded-full">
        {count}
      </span>
    </button>
  );
};

export default Tab;
