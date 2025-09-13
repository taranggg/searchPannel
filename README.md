# 🔎 Search Panel — React + TypeScript + Vite

Delightful, modern search UI with tabs, fuzzy matching, avatars with presence, and quick actions — all in a tiny, easy‑to‑read codebase.

## ✨ Highlights

- Smooth animations powered by Framer Motion
- Lightweight fuzzy search with debounced input
- Per‑type filtering (Files, People, Chats, Lists) via Settings
- Avatars for People & Chats with live‑style status dots
- Quick actions: Copy link and Open in new tab
- Thoughtful hover/focus states and loading skeletons

## 🚀 Quick Start

- Prereqs: Node 18+
- Install: `npm install`
- Run dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

Open the local URL from the terminal, then start typing to search. Use the gear icon to enable/disable result types.

## 🧭 Usage Tips

- Type to filter results across all enabled types.
- Hover a row to reveal actions on the right.
  - Copy link: copies the deep link and briefly shows a checkmark.
  - New Tab: opens the item in a new browser tab.
- Presence dots: green = active, yellow = idle.

## 🧱 Project Layout

- `src/components/SearchPannel.tsx`: Panel UI, tabs, settings, debounce, and rendering
- `src/components/ItemCard.tsx`: Each result row, highlight + actions
- `src/components/TypeBadge.tsx`: Avatars, presence dots, and type icons
- `src/components/SkeletonList.tsx`: Loading placeholders
- `src/data/mockData.ts`: Seed data and `Item` type

## 🛠️ Configure & Extend

- Data: edit `src/data/mockData.ts:1` (People/Files/Chats/Lists…)
  - `Item` fields: `id`, `type`, `title`, `subtitle`, `status`, `avatar`, `url`
- Links: add `url` to items; otherwise a default `https://example.app/{type}/{id}` is used
- Presence: change the color mapping in `src/components/TypeBadge.tsx`
- Filter logic: tweak `filterItems` in `src/components/SearchPannel.tsx:12`

## 🧩 Tech Stack

- React + TypeScript + Vite
- Framer Motion for micro‑interactions
- Utility‑class styling (Tailwind‑like)
- Lucide icons

## 📚 Notes

- The fuzzy filter only returns items with real text matches (no false positives for People).
- Settings modal dims icon + label when a type is disabled, matching the toggle state.
- Action buttons show a subtle gray tint and outline on hover/focus.

## 📄 License

For demo and learning purposes.
