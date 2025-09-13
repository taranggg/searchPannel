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
  ChevronRight,
  Wrench,
  FolderTree,
  Keyboard as KeyboardIcon,
  Bug,
  HelpCircle,
} from "lucide-react";

type SectionProps = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  accentClasses?: string; // e.g., 'bg-sky-50 text-sky-700 border-sky-100'
  children: React.ReactNode;
};

const Section = ({
  id,
  title,
  icon,
  accentClasses = "bg-zinc-50 text-zinc-700 border-zinc-100",
  children,
}: SectionProps) => (
  <section id={id} className="mb-10 scroll-mt-20">
    <div className="flex items-center gap-3 mb-3">
      <div
        className={`w-7 h-7 rounded-md grid place-items-center border ${accentClasses}`}
      >
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-zinc-900">{title}</h2>
      <a href={`#${id}`} className="text-zinc-400 hover:text-zinc-600 text-sm">
        #
      </a>
    </div>
    <div className="prose prose-zinc max-w-none">{children}</div>
  </section>
);

// border-zinc-100 bg-white/70
const DocsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-300">
      {/* Hero */}
      <div className="border-b  backdrop-blur shadow-sm bg-gradient-to-b from-teal-100/60 to-teal-200/30">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
              Project Documentation
            </h1>
            <p className="text-zinc-500 mt-1">
              Everything you need to understand, run, and extend the Search
              Panel.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                React + TS
              </span>
              <span className="px-2 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                Framer Motion
              </span>
              <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                MSW (API Mock)
              </span>
              <span className="px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                Lucide Icons
              </span>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center  border border-emerald-500/60 gap-2 px-3 py-1.5 rounded-lg  text-zinc-700 shadow-lg hover:bg-emerald-100/40 hover:backdrop-blur-lg hover:border-emerald-200/60 transition-colors"
          >
            Try the Search Panel
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Quick nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {[
            {
              href: "#overview",
              label: "Overview",
              icon: <SearchIcon className="w-4 h-4" />,
              styles: {
                hover: "hover:text-sky-800",
                ring: "group-hover:ring-sky-300/50",
                iconBox: "bg-sky-100 text-sky-700",
                grad: "from-sky-300/50 to-sky-100/0",
              },
            },
            {
              href: "#architecture",
              label: "Components",
              icon: <Boxes className="w-4 h-4" />,
              styles: {
                hover: "hover:text-violet-800",
                ring: "group-hover:ring-violet-300/50",
                iconBox: "bg-violet-100 text-violet-700",
                grad: "from-violet-300/50 to-violet-100/0",
              },
            },
            {
              href: "#routing",
              label: "Routing",
              icon: <RouteIcon className="w-4 h-4" />,
              styles: {
                hover: "hover:text-amber-800",
                ring: "group-hover:ring-amber-300/50",
                iconBox: "bg-amber-100 text-amber-700",
                grad: "from-amber-300/50 to-amber-100/0",
              },
            },
            {
              href: "#data",
              label: "Data Model",
              icon: <Database className="w-4 h-4" />,
              styles: {
                hover: "hover:text-emerald-800",
                ring: "group-hover:ring-emerald-300/50",
                iconBox: "bg-emerald-100 text-emerald-700",
                grad: "from-emerald-300/50 to-emerald-100/0",
              },
            },
            {
              href: "#api",
              label: "API (MSW)",
              icon: <Cloud className="w-4 h-4" />,
              styles: {
                hover: "hover:text-cyan-800",
                ring: "group-hover:ring-cyan-300/50",
                iconBox: "bg-cyan-100 text-cyan-700",
                grad: "from-cyan-300/50 to-cyan-100/0",
              },
            },
            {
              href: "#filter",
              label: "Search & Filtering",
              icon: <FilterIcon className="w-4 h-4" />,
              styles: {
                hover: "hover:text-rose-800",
                ring: "group-hover:ring-rose-300/50",
                iconBox: "bg-rose-100 text-rose-700",
                grad: "from-rose-300/50 to-rose-100/0",
              },
            },
            {
              href: "#async",
              label: "Async & UX",
              icon: <Activity className="w-4 h-4" />,
              styles: {
                hover: "hover:text-indigo-800",
                ring: "group-hover:ring-indigo-300/50",
                iconBox: "bg-indigo-100 text-indigo-700",
                grad: "from-indigo-300/50 to-indigo-100/0",
              },
            },
            {
              href: "#actions",
              label: "Result Actions",
              icon: <ExternalLink className="w-4 h-4" />,
              styles: {
                hover: "hover:text-teal-800",
                ring: "group-hover:ring-teal-300/50",
                iconBox: "bg-teal-100 text-teal-700",
                grad: "from-teal-300/50 to-teal-100/0",
              },
            },
            {
              href: "#style",
              label: "Styling & Motion",
              icon: <Sparkles className="w-4 h-4" />,
              styles: {
                hover: "hover:text-fuchsia-800",
                ring: "group-hover:ring-fuchsia-300/50",
                iconBox: "bg-fuchsia-100 text-fuchsia-700",
                grad: "from-fuchsia-300/50 to-fuchsia-100/0",
              },
            },
            {
              href: "#extend",
              label: "Extending",
              icon: <Plug className="w-4 h-4" />,
              styles: {
                hover: "hover:text-lime-800",
                ring: "group-hover:ring-lime-300/50",
                iconBox: "bg-lime-100 text-lime-700",
                grad: "from-lime-300/50 to-lime-100/0",
              },
            },
          ].map((l) => (
            <a key={l.href} href={l.href} className={`group block`}>
              {/* gradient border wrapper */}
              <div
                className={`relative rounded-2xl p-[1px] transition-transform duration-200 group-hover:-translate-y-0.5 `}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 ${l.styles.grad} transition-opacity`}
                ></div>
                <div
                  className={`relative rounded-2xl glassmorphism-quicklink ring-1 ring-zinc-200 ${l.styles.ring} shadow-sm overflow-hidden`}
                >
                  <div
                    className={`flex items-center justify-between gap-3 px-4 py-3 text-sm text-zinc-700 transition-colors ${l.styles.hover}`}
                  >
                    <span
                      className={`h-8 w-8 rounded-xl grid place-items-center shadow-sm transition-transform group-hover:scale-110 ${l.styles.iconBox}`}
                    >
                      {l.icon}
                    </span>
                    <span className="flex-1 font-medium">{l.label}</span>
                    <span className="text-zinc-400 group-hover:text-current transition-all">
                      <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <Section
          id="overview"
          title="Overview"
          icon={<SearchIcon className="w-4 h-4" />}
          accentClasses="bg-sky-50 text-sky-700 border-sky-100"
        >
          <p>
            This project implements a modern search panel in React with tabs,
            settings, avatars with presence dots, and quick actions. It
            simulates a real API using Mock Service Worker (MSW), so the UI
            behaves as if it talks to a backend without needing one during
            development.
          </p>
          <h3>Goals</h3>
          <ul>
            <li>Fast, intuitive search with clear visual feedback.</li>
            <li>Composable components that are easy to extend.</li>
            <li>API-first development using MSW to mirror production flows.</li>
          </ul>
        </Section>

        <Section
          id="architecture"
          title="Component Architecture"
          icon={<Boxes className="w-4 h-4" />}
          accentClasses="bg-violet-50 text-violet-700 border-violet-100"
        >
          <ul>
            <li>
              <code>App</code>: Bootstraps routes and renders pages.
            </li>
            <li>
              <code>SearchPannel</code>: Core UI. Manages query, tabs, settings,
              fetching, filtering and renders results.
            </li>
            <li>
              <code>ItemCard</code>: A single result row. Shows title, subtitle,
              actions.
            </li>
            <li>
              <code>TypeBadge</code>: Avatar + status for People/Chats; icons
              for other types.
            </li>
            <li>
              <code>FlatList</code>: Lightweight list with enter/exit
              animations.
            </li>
            <li>
              <code>SkeletonList</code>: Loading placeholders.
            </li>
            <li>
              <code>ActivityIndicator</code>: Small spinner for header.
            </li>
            <li>
              <code>Tab</code>: Presentational tab with icon + label + count,
              active underline.
            </li>
          </ul>
          <h3>Hierarchy</h3>
          <pre className="whitespace-pre-wrap text-sm bg-zinc-50 rounded-lg p-3 border border-zinc-200 shadow-md">{`App
└─ Router
   ├─ / → SearchPannel
   │   ├─ Header (Search + Spinner)
   │   ├─ Tabs (Tab components)
   │   ├─ Settings Popover
   │   └─ Results → FlatList → ItemCard → TypeBadge
   └─ /docs → DocsPage`}</pre>
        </Section>

        <Section
          id="routing"
          title="Routing"
          icon={<RouteIcon className="w-4 h-4" />}
          accentClasses="bg-amber-50 text-amber-700 border-amber-100"
        >
          <p>
            Client-side routing is provided by <code>react-router-dom</code>.
            The app defines two routes:
          </p>
          <ul>
            <li>
              <code>/</code> — Main search panel
            </li>
            <li>
              <code>/docs</code> — This documentation page
            </li>
          </ul>
          <p>The floating Docs button hides on the docs route.</p>
        </Section>

        <Section
          id="data"
          title="Data Model"
          icon={<Database className="w-4 h-4" />}
          accentClasses="bg-emerald-50 text-emerald-700 border-emerald-100"
        >
          <ul>
            <li>
              <code>ItemType</code>: one of People, Files, Folders, Videos,
              Chats, Lists.
            </li>
            <li>
              <code>Item</code>:{" "}
              <code>{`{ id, type, title, subtitle?, status?, avatar?, url? }`}</code>
            </li>
            <li>
              Presence dots: <code>status: "active"</code> renders green;{" "}
              <code>"idle"</code> renders yellow.
            </li>
          </ul>
          <h3>Example</h3>
          <pre className="whitespace-pre-wrap text-sm bg-zinc-50 rounded-lg p-3 border border-zinc-200 shadow-md">{`{
  "id": "p1",
  "type": "people",
  "title": "Randall Johnsson",
  "subtitle": "Active now",
  "status": "active",
  "avatar": "https://i.pravatar.cc/64?img=11",
  "url": "https://example.app/people/p1"
}`}</pre>
        </Section>

        <Section
          id="api"
          title="API Simulation (MSW)"
          icon={<Cloud className="w-4 h-4" />}
          accentClasses="bg-cyan-50 text-cyan-700 border-cyan-100"
        >
          <ul>
            <li>
              <code>public/mockServiceWorker.js</code>: Worker served by Vite.
            </li>
            <li>
              <code>src/mocks/browser.ts</code>: Starts the worker (dev only).
            </li>
            <li>
              <code>src/mocks/handlers.ts</code>: Defines{" "}
              <code>GET /api/items?q=...</code> with a latency delay.
            </li>
            <li>
              Simulations: include query words like <em>network</em>,{" "}
              <em>error</em>, <em>empty</em>, <em>timeout</em>, or use{" "}
              <code>?latency=ms</code> to adjust delay.
            </li>
          </ul>
          <h3>Fallback Strategy</h3>
          <p>
            If the worker isn’t running or the request fails, the UI falls back
            to client-side filtering of <code>MOCK</code> so the app stays
            usable.
          </p>
        </Section>

        <Section
          id="filter"
          title="Search & Filtering"
          icon={<FilterIcon className="w-4 h-4" />}
          accentClasses="bg-rose-50 text-rose-700 border-rose-100"
        >
          <ul>
            <li>
              Fuzzy-ish filter in <code>SearchPannel</code>: requires a real
              substring match, boosts prefix matches.
            </li>
            <li>
              After results load, they are filtered again by enabled types
              (Settings) and current tab.
            </li>
            <li>Derived counts populate tab badges.</li>
          </ul>
          <h3>Scoring</h3>
          <ul>
            <li>
              <code>startsWith</code> match: +3
            </li>
            <li>
              <code>includes</code> match: +1
            </li>
            <li>People get a small bonus only when there is a real match.</li>
          </ul>
        </Section>

        <Section
          id="async"
          title="Async Flow & UX"
          icon={<Activity className="w-4 h-4" />}
          accentClasses="bg-indigo-50 text-indigo-700 border-indigo-100"
        >
          <ul>
            <li>
              Debounced input triggers a fetch; an AbortController cancels stale
              requests.
            </li>
            <li>
              Spinner shows in header while fetching; skeleton rows maintain
              layout.
            </li>
            <li>
              On fetch error, the UI falls back to filtering the local mock
              data.
            </li>
          </ul>
          <h3>Loading Strategy</h3>
          <p>
            Input is debounced (~300ms) and the handler adds ~450ms latency for
            realism. We show a compact header spinner and skeleton rows to
            preserve layout while loading.
          </p>
        </Section>

        <Section
          id="actions"
          title="Result Actions"
          icon={<ExternalLink className="w-4 h-4" />}
          accentClasses="bg-teal-50 text-teal-700 border-teal-100"
        >
          <ul>
            <li>
              Copy link: writes a deep link to clipboard and shows a checkmark
              briefly.
            </li>
            <li>
              Open in new tab: uses an anchor with <code>target="_blank"</code>.
            </li>
            <li>
              Only the hovered/focused action shows an outline and a subtle gray
              background.
            </li>
          </ul>
          <h3>Deep Links</h3>
          <p>
            If an item includes <code>url</code>, actions use it; otherwise a
            stable default{" "}
            <code>
              https://example.app/{`{type}`}/{`{id}`}
            </code>
            is generated so the UX is consistent before real links exist.
          </p>
        </Section>

        <Section
          id="style"
          title="Styling & Motion"
          icon={<Sparkles className="w-4 h-4" />}
          accentClasses="bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100"
        >
          <ul>
            <li>Utility classes provide compact, consistent styling.</li>
            <li>Framer Motion animates panel width and list items.</li>
            <li>Icons from lucide-react.</li>
          </ul>
          <h3>Animations</h3>
          <ul>
            <li>
              Panel width transitions between collapsed/expanded while
              searching.
            </li>
            <li>
              List items fade/slide via <code>FlatList</code> motion wrappers.
            </li>
            <li>Settings popover springs in/out with a short duration.</li>
          </ul>
        </Section>

        <Section
          id="extend"
          title="Extending"
          icon={<Plug className="w-4 h-4" />}
          accentClasses="bg-lime-50 text-lime-700 border-lime-100"
        >
          <ul>
            <li>
              Replace MSW with a real API by swapping the fetch URL and removing
              the worker init in <code>main.tsx</code>.
            </li>
            <li>
              Add endpoints and error modes in{" "}
              <code>src/mocks/handlers.ts</code> for richer demos.
            </li>
            <li>Paginate results or virtualize the list if data grows.</li>
          </ul>
          <h3>Roadmap Ideas</h3>
          <ul>
            <li>Keyboard shortcuts (toggle search, navigate results).</li>
            <li>Server-driven highlighting and ranking.</li>
            <li>Persist settings via localStorage.</li>
            <li>Theme switch (light/dark) + reduced-motion support.</li>
          </ul>
        </Section>

        <Section
          id="dev"
          title="Development & Scripts"
          icon={<Wrench className="w-4 h-4" />}
          accentClasses="bg-zinc-100 text-zinc-700 border-zinc-200"
        >
          <ul>
            <li>
              Install: <code>npm install</code>
            </li>
            <li>
              Dev server: <code>npm run dev</code>
            </li>
            <li>
              Build/Preview: <code>npm run build</code> /{" "}
              <code>npm run preview</code>
            </li>
          </ul>
          <p>
            MSW is started in development automatically (see{" "}
            <code>main.tsx</code>), serving <code>/api/items</code> without a
            backend.
          </p>
        </Section>

        <Section
          id="structure"
          title="Folder Structure"
          icon={<FolderTree className="w-4 h-4" />}
          accentClasses="bg-zinc-100 text-zinc-700 border-zinc-200"
        >
          <pre className="whitespace-pre-wrap text-sm bg-zinc-50 rounded-lg p-3 border border-zinc-200 shadow-md">{`src/
  components/
    ActivityIndicator.tsx
    DocsButton.tsx
    FlatList.tsx
    ItemCard.tsx
    SearchPannel.tsx
    Tab.tsx
    TypeBadge.tsx
  data/
    mockData.ts
  mocks/
    browser.ts
    handlers.ts
  pages/
    DocsPage.tsx
  App.tsx
  main.tsx`}</pre>
        </Section>

        <Section
          id="a11y"
          title="Accessibility & Keyboard"
          icon={<KeyboardIcon className="w-4 h-4" />}
          accentClasses="bg-emerald-50 text-emerald-700 border-emerald-100"
        >
          <ul>
            <li>
              List semantics via <code>role="list"</code>/
              <code>role="listitem"</code>.
            </li>
            <li>Focus-visible outlines on actionable controls.</li>
            <li>
              Spinner has <code>role="progressbar"</code> and{" "}
              <code>aria-label</code>.
            </li>
            <li>
              Avatars include <code>alt</code> text (defaults to title).
            </li>
          </ul>
        </Section>

        <Section
          id="troubleshoot"
          title="Troubleshooting"
          icon={<Bug className="w-4 h-4" />}
          accentClasses="bg-rose-50 text-rose-700 border-rose-100"
        >
          <ul>
            <li>
              MSW MIME error: ensure <code>public/mockServiceWorker.js</code>{" "}
              exists; then hard refresh.
            </li>
            <li>
              Force empty results: query <em>empty</em>. Simulate failures:{" "}
              <em>network</em> or <em>error</em>.
            </li>
          </ul>
        </Section>

        <Section
          id="faq"
          title="FAQ"
          icon={<HelpCircle className="w-4 h-4" />}
          accentClasses="bg-sky-50 text-sky-700 border-sky-100"
        >
          <h3>Why MSW vs. a static JSON?</h3>
          <p>
            It behaves like a real API (routes, latency, errors) making the UI
            integration seamless later.
          </p>
          <h3>How do I add a new type?</h3>
          <p>
            Add to <code>ItemType</code>, seed data in <code>mockData.ts</code>,
            icon rules in <code>TypeBadge.tsx</code>, and include it in
            tabs/settings.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default DocsPage;
