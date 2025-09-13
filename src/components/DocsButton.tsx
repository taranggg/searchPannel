import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

const DocsButton = () => {
  const location = useLocation();
  // Hide on docs page itself
  if (location.pathname === "/docs") return null;
  return (
    <Link
      to="/docs"
      className="group fixed left-4 bottom-4 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-zinc-300 backdrop-blur transition-all duration-200 ease-out hover:text-yellow-900 hover:shadow-lg hover:bg-yellow-100/40 active:scale-95 hover:border hover:border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-300/60 "
    >
      <BookOpen className="w-5 h-5 text-zinc-300 group-hover:text-yellow-900 transition-colors duration-200" />
      <span className="text-base font-medium tracking-wide">Docs</span>
    </Link>
  );
};

export default DocsButton;
