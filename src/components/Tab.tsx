import React from "react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Props = {
  icon?: IconType;
  label: string;
  count: number;
  active: boolean;
  muted?: boolean; // optional visual dimming
  onClick: () => void;
};

const Tab = ({ icon: Icon, label, count, active, muted = false, onClick }: Props) => {
  const colorClass = active ? "text-black" : muted ? "text-zinc-300" : "text-zinc-400";
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-1 px-2 py-1 text-base font-medium focus:outline-none ${colorClass}`}
      style={{ background: "none", border: "none" }}
    >
      {Icon ? <Icon className="mr-1 w-5 h-5" strokeWidth={2} /> : null}
      {label}
      <span className="ml-1 text-xs font-normal">{count}</span>
      {active && (
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black rounded" />
      )}
    </button>
  );
};

export default Tab;
