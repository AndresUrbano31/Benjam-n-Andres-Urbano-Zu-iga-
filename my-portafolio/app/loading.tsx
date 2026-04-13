export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-cyan-500/30 border-t-cyan-500 animate-spin" />
        <p className="text-cyan-500 dark:text-cyan-400 font-semibold animate-pulse">Loading...</p>
      </div>
    </div>
  );
}