type SkeletonListProps = { count?: number };
const SkeletonList = ({ count = 5 }: SkeletonListProps) => (
  <div className="divide-y divide-zinc-100">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="px-6 py-3">
        <div className="flex gap-3 items-center">
          <div className="h-8 w-8 rounded-lg bg-zinc-200 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-48 rounded bg-zinc-200 animate-pulse" />
            <div className="h-3 w-64 rounded bg-zinc-100 animate-pulse" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonList;
