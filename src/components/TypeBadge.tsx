import type { Item } from "../data/mockData";
import { File, Folder, Video, User, MessageCircle, List } from "lucide-react";

const TypeBadge = ({ item }: { item: Item }) => {
  const renderStatusDot = () => {
    if (!item.status) return null;
    const color = item.status === "active" ? "bg-emerald-500" : "bg-amber-400";
    return (
      <span
        className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-white ${color}`}
      />
    );
  };

  if (item.type === "people" || item.type === "chats") {
    const FallbackIcon = item.type === "people" ? User : MessageCircle;
    return (
      <div className="relative">
        <div className="w-9 h-9 rounded-full overflow-hidden bg-zinc-200 flex items-center justify-center">
          {item.avatar ? (
            // External avatar image
            <img
              src={item.avatar}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <FallbackIcon className="w-5 h-5 text-zinc-600" />
          )}
        </div>
        {renderStatusDot()}
      </div>
    );
  }

  const base = "w-9 h-9 rounded-lg grid place-items-center";
  const common = "text-zinc-700";
  switch (item.type) {
    case "files":
      return (
        <div className={`${base} bg-blue-50`}>
          <File className={`w-5 h-5 ${common}`} />
        </div>
      );
    case "folders":
      return (
        <div className={`${base} bg-amber-50`}>
          <Folder className={`w-5 h-5 ${common}`} />
        </div>
      );
    case "videos":
      return (
        <div className={`${base} bg-rose-50`}>
          <Video className={`w-5 h-5 ${common}`} />
        </div>
      );
    case "lists":
      return (
        <div className={`${base} bg-green-50`}>
          <List className={`w-5 h-5 ${common}`} />
        </div>
      );
    default:
      return (
        <div className={`${base} bg-zinc-100`}>
          <User className={`w-5 h-5 ${common}`} />
        </div>
      );
  }
};

export default TypeBadge;
