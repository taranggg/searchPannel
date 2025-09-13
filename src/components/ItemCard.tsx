// ItemCard.tsx

import React from "react";
import type { Item } from "../data/mockData";
import TypeBadge from "./TypeBadge";
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
  return (
    <div className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-50 transition-all">
      <TypeBadge item={item} />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-zinc-900">
          {highlight(item.title, q)}
        </div>
        {item.subtitle && (
          <div className="text-sm text-zinc-500">{item.subtitle}</div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
