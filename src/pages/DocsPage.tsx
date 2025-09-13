import React from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  Boxes,
  Route as RouteIcon,
  Database,
  Cloud,
  Filter as FilterIcon,
  Activity,
  ExternalLink,
  Sparkles,
  Plug,
} from "lucide-react";

type SectionProps = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  accentClasses?: string; // e.g., 'bg-sky-50 text-sky-700 border-sky-100'
  children: React.ReactNode;
};

const Section = ({ id, title, icon, accentClasses = "bg-zinc-50 text-zinc-700 border-zinc-100", children }: SectionProps) => (
  <section id={id} className="mb-10 scroll-mt-20">
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-7 h-7 rounded-md grid place-items-center border ${accentClasses}`}>
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <a href={`#${id}`} className="text-zinc-400 hover:text-zinc-600 text-sm">#</a>
    </div>
    <div className="prose prose-zinc max-w-none">
      {children}
    </div>
  </section>
);

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50">
      {/* Hero */}
      <div className="border-b border-zinc-100 bg-white/70 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Project Documentation</h1>
            <p className="text-zinc-500 mt-1">Everything you need to understand, run, and extend the Search Panel.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">React + TS</span>
              <span className="px-2 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-100">Framer Motion</span>
              <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">MSW (API Mock)</span>
              <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Lucide Icons</span>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:bg-zinc-100"
          >
            Try the Search Panel
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Quick nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {[
            { href: '#overview', label: 'Overview', icon: <SearchIcon className="w-4 h-4" />, hover: 'hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700', iconHover: 'group-hover:text-sky-700' },
            { href: '#architecture', label: 'Components', icon: <Boxes className="w-4 h-4" />, hover: 'hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700', iconHover: 'group-hover:text-violet-700' },
            { href: '#routing', label: 'Routing', icon: <RouteIcon className="w-4 h-4" />, hover: 'hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700', iconHover: 'group-hover:text-amber-700' },
            { href: '#data', label: 'Data Model', icon: <Database className="w-4 h-4" />, hover: 'hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700', iconHover: 'group-hover:text-emerald-700' },
            { href: '#api', label: 'API (MSW)', icon: <Cloud className="w-4 h-4" />, hover: 'hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700', iconHover: 'group-hover:text-cyan-700' },
            { href: '#filter', label: 'Search & Filtering', icon: <FilterIcon className="w-4 h-4" />, hover: 'hover:bg-rose-50 hover:border-rose-200 hover:text-rose-700', iconHover: 'group-hover:text-rose-700' },
            { href: '#async', label: 'Async & UX', icon: <Activity className="w-4 h-4" />, hover: 'hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700', iconHover: 'group-hover:text-indigo-700' },
            { href: '#actions', label: 'Result Actions', icon: <ExternalLink className="w-4 h-4" />, hover: 'hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700', iconHover: 'group-hover:text-teal-700' },
            { href: '#style', label: 'Styling & Motion', icon: <Sparkles className="w-4 h-4" />, hover: 'hover:bg-fuchsia-50 hover:border-fuchsia-200 hover:text-fuchsia-700', iconHover: 'group-hover:text-fuchsia-700' },
            { href: '#extend', label: 'Extending', icon: <Plug className="w-4 h-4" />, hover: 'hover:bg-lime-50 hover:border-lime-200 hover:text-lime-700', iconHover: 'group-hover:text-lime-700' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 inline-flex items-center gap-2 transition-colors ${l.hover}`}
            >
              <span className={`text-zinc-500 transition-colors ${l.iconHover}`}>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>

        <Section id="overview" title="Overview" icon={<SearchIcon className="w-4 h-4" />} accentClasses="bg-sky-50 text-sky-700 border-sky-100">
          <p>
            This project implements a modern search panel in React with tabs, settings,
            avatars with presence dots, and quick actions. It simulates a real API using
            Mock Service Worker (MSW), so the UI behaves as if it talks to a backend
            without needing one during development.
          </p>
        </Section>

        <Section id="architecture" title="Component Architecture" icon={<Boxes className="w-4 h-4" />} accentClasses="bg-violet-50 text-violet-700 border-violet-100">
          <ul>
            <li><code>App</code>: Bootstraps routes and renders pages.</li>
            <li><code>SearchPannel</code>: Core UI. Manages query, tabs, settings, fetching, filtering and renders results.</li>
            <li><code>ItemCard</code>: A single result row. Shows title, subtitle, actions.</li>
            <li><code>TypeBadge</code>: Avatar + status for People/Chats; icons for other types.</li>
            <li><code>FlatList</code>: Lightweight list with enter/exit animations.</li>
            <li><code>SkeletonList</code>: Loading placeholders.</li>
            <li><code>ActivityIndicator</code>: Small spinner for header.</li>
            <li><code>Tab</code>: Presentational tab with icon + label + count, active underline.</li>
          </ul>
        </Section>

        <Section id="routing" title="Routing" icon={<RouteIcon className="w-4 h-4" />} accentClasses="bg-amber-50 text-amber-700 border-amber-100">
          <p>
            Client-side routing is provided by <code>react-router-dom</code>.
            The app defines two routes:
          </p>
          <ul>
            <li><code>/</code> — Main search panel</li>
            <li><code>/docs</code> — This documentation page</li>
          </ul>
        </Section>

        <Section id="data" title="Data Model" icon={<Database className="w-4 h-4" />} accentClasses="bg-emerald-50 text-emerald-700 border-emerald-100">
          <ul>
            <li><code>ItemType</code>: one of People, Files, Folders, Videos, Chats, Lists.</li>
            <li><code>Item</code>: <code>{`{ id, type, title, subtitle?, status?, avatar?, url? }`}</code></li>
            <li>
              Presence dots: <code>status: "active"</code> renders green; <code>"idle"</code> renders yellow.
            </li>
          </ul>
        </Section>

        <Section id="api" title="API Simulation (MSW)" icon={<Cloud className="w-4 h-4" />} accentClasses="bg-cyan-50 text-cyan-700 border-cyan-100">
          <ul>
            <li><code>public/mockServiceWorker.js</code>: Worker served by Vite.</li>
            <li><code>src/mocks/browser.ts</code>: Starts the worker (dev only).</li>
            <li><code>src/mocks/handlers.ts</code>: Defines <code>GET /api/items?q=...</code> with a latency delay.</li>
            <li>
              Simulations: include query words like <em>network</em>, <em>error</em>, <em>empty</em>, <em>timeout</em>, or use <code>?latency=ms</code> to adjust delay.
            </li>
          </ul>
        </Section>

        <Section id="filter" title="Search & Filtering" icon={<FilterIcon className="w-4 h-4" />} accentClasses="bg-rose-50 text-rose-700 border-rose-100">
          <ul>
            <li>
              Fuzzy-ish filter in <code>SearchPannel</code>: requires a real substring match, boosts prefix matches.
            </li>
            <li>
              After results load, they are filtered again by enabled types (Settings) and current tab.
            </li>
            <li>Derived counts populate tab badges.</li>
          </ul>
        </Section>

        <Section id="async" title="Async Flow & UX" icon={<Activity className="w-4 h-4" />} accentClasses="bg-indigo-50 text-indigo-700 border-indigo-100">
          <ul>
            <li>Debounced input triggers a fetch; an AbortController cancels stale requests.</li>
            <li>Spinner shows in header while fetching; skeleton rows maintain layout.</li>
            <li>On fetch error, the UI falls back to filtering the local mock data.</li>
          </ul>
        </Section>

        <Section id="actions" title="Result Actions" icon={<ExternalLink className="w-4 h-4" />} accentClasses="bg-teal-50 text-teal-700 border-teal-100">
          <ul>
            <li>Copy link: writes a deep link to clipboard and shows a checkmark briefly.</li>
            <li>Open in new tab: uses an anchor with <code>target="_blank"</code>.</li>
            <li>Only the hovered/focused action shows an outline and a subtle gray background.</li>
          </ul>
        </Section>

        <Section id="style" title="Styling & Motion" icon={<Sparkles className="w-4 h-4" />} accentClasses="bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100">
          <ul>
            <li>Utility classes provide compact, consistent styling.</li>
            <li>Framer Motion animates panel width and list items.</li>
            <li>Icons from lucide-react.</li>
          </ul>
        </Section>

        <Section id="extend" title="Extending" icon={<Plug className="w-4 h-4" />} accentClasses="bg-lime-50 text-lime-700 border-lime-100">
          <ul>
            <li>Replace MSW with a real API by swapping the fetch URL and removing the worker init in <code>main.tsx</code>.</li>
            <li>Add endpoints and error modes in <code>src/mocks/handlers.ts</code> for richer demos.</li>
            <li>Paginate results or virtualize the list if data grows.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default DocsPage;
