import React from "react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-zinc-900 mb-2">{title}</h2>
    <div className="prose prose-zinc max-w-none">
      {children}
    </div>
  </section>
);

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">Project Documentation</h1>

        <Section title="Overview">
          <p>
            This project implements a modern search panel in React with tabs, settings,
            avatars with presence dots, and quick actions. It simulates a real API using
            Mock Service Worker (MSW), so the UI behaves as if it talks to a backend
            without needing one during development.
          </p>
        </Section>

        <Section title="Component Architecture">
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

        <Section title="Routing">
          <p>
            Client-side routing is provided by <code>react-router-dom</code>.
            The app defines two routes:
          </p>
          <ul>
            <li><code>/</code> — Main search panel</li>
            <li><code>/docs</code> — This documentation page</li>
          </ul>
        </Section>

        <Section title="Data Model">
          <ul>
            <li><code>ItemType</code>: one of People, Files, Folders, Videos, Chats, Lists.</li>
            <li><code>Item</code>: <code>{`{ id, type, title, subtitle?, status?, avatar?, url? }`}</code></li>
            <li>
              Presence dots: <code>status: "active"</code> renders green; <code>"idle"</code> renders yellow.
            </li>
          </ul>
        </Section>

        <Section title="API Simulation (MSW)">
          <ul>
            <li><code>public/mockServiceWorker.js</code>: Worker served by Vite.</li>
            <li><code>src/mocks/browser.ts</code>: Starts the worker (dev only).</li>
            <li><code>src/mocks/handlers.ts</code>: Defines <code>GET /api/items?q=...</code> with a latency delay.</li>
            <li>
              Simulations: include query words like <em>network</em>, <em>error</em>, <em>empty</em>, <em>timeout</em>, or use <code>?latency=ms</code> to adjust delay.
            </li>
          </ul>
        </Section>

        <Section title="Search & Filtering">
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

        <Section title="Async Flow & UX">
          <ul>
            <li>Debounced input triggers a fetch; an AbortController cancels stale requests.</li>
            <li>Spinner shows in header while fetching; skeleton rows maintain layout.</li>
            <li>On fetch error, the UI falls back to filtering the local mock data.</li>
          </ul>
        </Section>

        <Section title="Result Actions">
          <ul>
            <li>Copy link: writes a deep link to clipboard and shows a checkmark briefly.</li>
            <li>Open in new tab: uses an anchor with <code>target="_blank"</code>.</li>
            <li>Only the hovered/focused action shows an outline and a subtle gray background.</li>
          </ul>
        </Section>

        <Section title="Styling & Motion">
          <ul>
            <li>Utility classes provide compact, consistent styling.</li>
            <li>Framer Motion animates panel width and list items.</li>
            <li>Icons from lucide-react.</li>
          </ul>
        </Section>

        <Section title="Extending">
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

