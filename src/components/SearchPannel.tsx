import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK, type Item } from "../data/mockData";
import SkeletonList from "./SkeletonList";
import ItemCard from "./ItemCard";
import FlatList from "./FlatList";
import { Search, File, User, Settings, Circle } from "lucide-react";
import ActivityIndicator from "./ActivityIndicator";
import Tab from "./Tab";
// import { MOCK, Item } from "./data/mockData";

// Basic fuzzy search filter
function filterItems(q: string, items: Item[]) {
  if (!q.trim()) return items;
  const s = q.toLowerCase();
  return (
    items
      .map((it) => {
        const hay = (it.title + " " + (it.subtitle || "")).toLowerCase();
        const matches = hay.includes(s);
        let score = 0;
        if (hay.startsWith(s)) score += 3;
        if (matches) score += 1;
        // Only boost people results when there is an actual match
        if (matches && it.type === "people" && s.length > 1) score += 0.2;
        return { it, score, matches };
      })
      // Require a real text match; otherwise don't include the item
      .filter((x) => x.matches && x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.it)
  );
}

const SEARCH_TYPES = [
  { key: "files", label: "Files", icon: File },
  { key: "people", label: "People", icon: User },
  {
    key: "chats",
    label: "Chats",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "lists",
    label: "Lists",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line
          x1="8"
          y1="6"
          x2="21"
          y2="6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="12"
          x2="21"
          y2="12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="18"
          x2="21"
          y2="18"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="3" cy="6" r="1" strokeWidth="2" />
        <circle cx="3" cy="12" r="1" strokeWidth="2" />
        <circle cx="3" cy="18" r="1" strokeWidth="2" />
      </svg>
    ),
  },
];

const SearchPanel = () => {
  const [q, setQ] = useState("");
  const [tab, setTab] = useState<"all" | "files" | "people">("all");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const settingsButtonRef = React.useRef<HTMLButtonElement | null>(null);
  const settingsPopoverRef = React.useRef<HTMLDivElement | null>(null);
  const typingTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const prevQ = React.useRef("");
  const [enabledTypes, setEnabledTypes] = useState<{
    files: boolean;
    people: boolean;
    chats: boolean;
    lists: boolean;
  }>({
    files: true,
    people: true,
    chats: true,
    lists: true,
  });

  // Simulated async search delay
  const [results, setResults] = useState<Item[]>(MOCK);
  useEffect(() => {
    setIsLoading(true);

    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/items?q=${encodeURIComponent(q)}`, {
          signal: ctrl.signal,
        });
        if (!res.ok) throw new Error("network");
        const data: Item[] = await res.json();
        setResults(data);
      } catch {
        // Fallback to local filter if MSW isn't running
        setResults(filterItems(q, MOCK));
      } finally {
        setIsLoading(false);
        prevQ.current = q;
      }
    }, 300);
    return () => {
      ctrl.abort();
      clearTimeout(t);
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [q]);

  // Filter results by enabled types
  const filteredResults = useMemo(() => {
    return results.filter((r) => {
      if (r.type === "files" || r.type === "folders" || r.type === "videos")
        return enabledTypes.files;
      if (r.type === "people") return enabledTypes.people;
      if (r.type === "chats") return enabledTypes.chats;
      if (r.type === "lists") return enabledTypes.lists;
      return true;
    });
  }, [results, enabledTypes]);

  const counts = useMemo(() => {
    const files = filteredResults.filter(
      (r) => r.type === "files" || r.type === "folders" || r.type === "videos"
    ).length;
    const people = filteredResults.filter((r) => r.type === "people").length;
    const chats = filteredResults.filter(
      (r) => (r.type as string) === "chats"
    ).length;
    const lists = filteredResults.filter(
      (r) => (r.type as string) === "lists"
    ).length;
    return { all: filteredResults.length, files, people, chats, lists };
  }, [filteredResults]);

  // Dynamically build tab list based on enabled types
  const enabledTabTypes = SEARCH_TYPES.filter(
    (t) => enabledTypes[t.key as keyof typeof enabledTypes]
  );
  // Always include 'all' tab
  const tabList = [
    { key: "all", label: "All", icon: Circle, count: counts.all },
    ...enabledTabTypes.map((t) => ({
      key: t.key,
      label: t.label,
      icon: t.icon,
      count: counts[t.key as keyof typeof counts] ?? 0,
    })),
  ];

  // If current tab is disabled, fallback to 'all'
  React.useEffect(() => {
    if (tab !== "all" && !enabledTypes[tab as keyof typeof enabledTypes]) {
      setTab("all");
    }
  }, [tab, enabledTypes]);

  const visible = useMemo(() => {
    if (tab === "all") return filteredResults;
    // Show only items of the selected type
    return filteredResults.filter((r) => {
      if (tab === "files")
        return (
          r.type === "files" || r.type === "folders" || r.type === "videos"
        );
      if (tab === "people") return r.type === "people";
      // For custom/unknown types, fallback to string match
      return (r.type as string) === tab;
    });
  }, [filteredResults, tab]);

  // Animation variants for panel expansion
  // Animate width only; keep a stable min height via style
  const panelVariants = {
    collapsed: {
      width: 600,
      transition: { duration: 0.4 },
    },
    expanded: {
      width: 680,
      transition: { duration: 0.4 },
    },
  };

  const isSearching = q.trim().length > 0;

  // Close settings on outside click or Escape
  useEffect(() => {
    if (!showSettings) return;
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (
        (settingsPopoverRef.current &&
          target &&
          settingsPopoverRef.current.contains(target)) ||
        (settingsButtonRef.current &&
          target &&
          settingsButtonRef.current.contains(target))
      ) {
        return; // click inside popover or button
      }
      setShowSettings(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSettings(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer, { passive: true });
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [showSettings]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-rose-100 to-rose-900">
      <motion.div
        className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
        initial="collapsed"
        animate={isSearching ? "expanded" : "collapsed"}
        variants={panelVariants}
        style={{
          // Clip internal content to panel shape; popover may be cut
          overflow: "hidden",
          // Only enforce a taller min-height when searching
          minHeight: isSearching ? 350 : undefined,
        }}
      >
        {/* Header */}
        <div
          className={`flex items-center gap-3 px-5 pt-4 pb-3 transition-all duration-300 ${
            isSearching ? "" : "justify-center"
          }`}
        >
          {/* Search icon or spinner */}
          {isLoading ? (
            <span className="w-8 h-8 flex items-center justify-center">
              <ActivityIndicator size={16} thickness={2} color="#000" />
            </span>
          ) : (
            <Search className="w-8 h-8 text-zinc-400" strokeWidth={2.5} />
          )}
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={isSearching ? "Search…" : "Searching is easier"}
            className={`flex-1 outline-none text-zinc-900 placeholder:text-zinc-400 font-light ${
              isSearching ? "text-lg" : "text-2xl bg-transparent"
            }`}
            style={{ border: "none", boxShadow: "none" }}
          />
          {!isSearching && (
            <div className="flex items-center gap-2 text-zinc-400 text-lg">
              <span className="border border-zinc-300 rounded-md px-2 py-0.5 text-base font-mono bg-zinc-50">
                s
              </span>
              <span className="text-sm font-light">quick access</span>
            </div>
          )}
          {isSearching && q && (
            <button
              onClick={() => setQ("")}
              className="text-sm text-zinc-700 hover:text-zinc-900 underline-offset-4 hover:underline"
            >
              Clear
            </button>
          )}
        </div>
        {/* Tabs and Body only when searching */}
        <AnimatePresence>
          {isSearching && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center px-5 border-b border-zinc-100 pb-1 relative z-10 bg-white">
                {tabList.map(({ key, label, icon, count }) => (
                  <Tab
                    key={key}
                    icon={
                      icon as React.ComponentType<React.SVGProps<SVGSVGElement>>
                    }
                    label={label}
                    count={count}
                    active={tab === (key as typeof tab)}
                    onClick={() => setTab(key as typeof tab)}
                  />
                ))}
                {/* Settings Icon */}
                <div className="ml-auto pr-2 relative">
                  <button
                    ref={settingsButtonRef}
                    aria-label="Settings"
                    onClick={() => {
                      setShowSettings((v) => !v);
                    }}
                    className="focus:outline-none"
                  >
                    <Settings
                      className="w-6 h-6 text-zinc-400"
                      strokeWidth={2}
                    />
                  </button>
                  <AnimatePresence>
                    {showSettings && (
                      <motion.div
                        ref={settingsPopoverRef}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 320,
                          damping: 30,
                          duration: 0.22,
                        }}
                        className="absolute right-0 mt-2 z-40 bg-white rounded-xl shadow-2xl ring-1 ring-black/10 p-4 min-w-[220px] flex flex-col gap-2"
                      >
                        {SEARCH_TYPES.map((type) => {
                          const Icon = type.icon;
                          return (
                            <label
                              key={type.key}
                              className={`flex items-center gap-3 px-1 py-2 rounded-lg transition-colors cursor-pointer hover:bg-zinc-100`}
                            >
                              <Icon
                                className={`w-5 h-5 ${
                                  enabledTypes[
                                    type.key as keyof typeof enabledTypes
                                  ]
                                    ? "text-black"
                                    : "text-zinc-400"
                                }`}
                                strokeWidth={2}
                              />
                              <span
                                className={`flex-1 text-base ${
                                  enabledTypes[
                                    type.key as keyof typeof enabledTypes
                                  ]
                                    ? "text-black"
                                    : "text-zinc-400"
                                }`}
                              >
                                {type.label}
                              </span>
                              <input
                                type="checkbox"
                                checked={
                                  !!enabledTypes[
                                    type.key as keyof typeof enabledTypes
                                  ]
                                }
                                onChange={() =>
                                  setEnabledTypes((et) => ({
                                    ...et,
                                    [type.key]:
                                      !et[
                                        type.key as keyof typeof enabledTypes
                                      ],
                                  }))
                                }
                                className="sr-only"
                              />
                              <span
                                className={`w-8 h-5 flex items-center bg-zinc-200 rounded-full p-1 transition-colors ${
                                  enabledTypes[
                                    type.key as keyof typeof enabledTypes
                                  ]
                                    ? "bg-black/80"
                                    : "bg-zinc-200"
                                }`}
                              >
                                <span
                                  className={`h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${
                                    enabledTypes[
                                      type.key as keyof typeof enabledTypes
                                    ]
                                      ? "translate-x-3"
                                      : ""
                                  }`}
                                ></span>
                              </span>
                            </label>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* Results area: clipped and scrollable while searching */}
              <div
                className={`px-2 ${
                  isSearching
                    ? "max-h-[60vh] overflow-y-auto overflow-x-hidden pt-0 pb-2"
                    : "py-2"
                }`}
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {/* If search is empty and loading, show full skeleton list */}
                  {q.trim() === "" && isLoading ? (
                    <SkeletonList />
                  ) : isLoading && q.trim() !== "" ? (
                    // While loading and user is typing a new search, show only skeletons
                    <SkeletonList />
                  ) : visible.length === 0 && !isLoading ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="p-6 text-center text-zinc-500"
                    >
                      No results
                    </motion.div>
                  ) : (
                    <FlatList
                      data={visible}
                      keyExtractor={(it) => it.id}
                      renderItem={(item) => <ItemCard item={item} q={q} />}
                      className="divide-y divide-zinc-100 m-0 p-0"
                      itemClassName="px-3"
                      withAnimation
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SearchPanel;
