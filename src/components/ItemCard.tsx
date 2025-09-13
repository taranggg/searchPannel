// ItemCard.tsx

import React, { useState } from "react";
import type { Item } from "../data/mockData";
import TypeBadge from "./TypeBadge";
import { Link as LinkIcon, ExternalLink, Check } from "lucide-react";
// Function to highlight matching text (q)
function highlight(text: string, q: string) {
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded px-1 py-0.5 bg-amber-200/80">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

const ItemCard = ({ item, q }: { item: Item; q: string }) => {
  const [copied, setCopied] = useState(false);
  const url =
    item.url || `https://example.app/${encodeURIComponent(item.type)}/${encodeURIComponent(item.id)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className="group w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 transition-all">
      <TypeBadge item={item} />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-zinc-900">
          {highlight(item.title, q)}
        </div>
        {item.subtitle && (
          <div className="text-sm text-zinc-500">{item.subtitle}</div>
        )}
      </div>
      {/* Actions: Copy link + Open in new tab */}
      <div className="ml-2 hidden sm:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          title="Copy link"
          className={`w-8 h-8 rounded-lg grid place-items-center border text-zinc-600 hover:bg-zinc-50 active:scale-[0.98] ${
            copied ? "border-emerald-500 text-emerald-600" : "border-zinc-200"
          }`}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <LinkIcon className="w-4 h-4" />
          )}
        </button>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          title="Open in new tab"
          className="pl-2 pr-2 h-8 rounded-lg flex items-center gap-1 text-zinc-600 border border-zinc-200 hover:bg-zinc-50 active:scale-[0.98]"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="hidden md:inline text-sm">New Tab</span>
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
