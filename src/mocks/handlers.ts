import { http, HttpResponse, delay } from 'msw';
import { MOCK, type Item } from '../data/mockData';

function filterItems(q: string, items: Item[]): Item[] {
  const s = q.trim().toLowerCase();
  if (!s) return items;
  return items.filter((it) =>
    (it.title + ' ' + (it.subtitle || '')).toLowerCase().includes(s)
  );
}

export const handlers = [
  http.get('/api/items', async ({ request }) => {
    const url = new URL(request.url);
    const q = (url.searchParams.get('q') ?? '').toLowerCase();

    // Error & edge-case simulations (adjustable without a backend)
    if (q.includes('network')) {
      // Simulate a network error (no response)
      return HttpResponse.error();
    }
    if (q.includes('error')) {
      // Simulate a 500 server failure
      return HttpResponse.json(
        { message: 'Simulated server error' },
        { status: 500 }
      );
    }
    if (q.includes('empty')) {
      // Simulate an empty payload
      await delay(250);
      return HttpResponse.json([]);
    }

    // Optional latency override (?latency=ms). Default: 450ms. "timeout" → 3000ms
    const forcedLatency = url.searchParams.get('latency');
    const latency = q.includes('timeout')
      ? 3000
      : Math.max(0, Number(forcedLatency ?? 450) || 450);

    const data = filterItems(q, MOCK);
    await delay(latency);
    return HttpResponse.json(data);
  }),
];
