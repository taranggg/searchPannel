import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react";

const DocsButton = () => {
  const location = useLocation();
  // Hide on docs page itself
  if (location.pathname === "/docs") return null;
  return (
    <Link
      to="/docs"
      className="fixed left-4 bottom-4 z-50 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white/90 backdrop-blur text-zinc-700 shadow-sm hover:bg-zinc-100"
    >
      <BookOpen className="w-4 h-4" />
      <span className="text-sm">Docs</span>
    </Link>
  );
};

export default DocsButton;

