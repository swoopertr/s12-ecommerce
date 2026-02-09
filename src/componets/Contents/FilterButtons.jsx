export default function FilterButtons() {
  return (
    <section className="mb-10 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 sm:pb-0">
        <button className="whitespace-nowrap px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-medium text-sm">
          All Content
        </button>
        <button className="whitespace-nowrap px-6 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors rounded-full font-medium text-sm">
          Architecture
        </button>
        <button className="whitespace-nowrap px-6 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors rounded-full font-medium text-sm">
          UI/UX Design
        </button>
        <button className="whitespace-nowrap px-6 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors rounded-full font-medium text-sm">
          Photography
        </button>
        <button className="whitespace-nowrap px-6 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors rounded-full font-medium text-sm">
          Technology
        </button>
        <button className="whitespace-nowrap px-6 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors rounded-full font-medium text-sm">
          Lifestyle
        </button>
      </div>
      <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
        <span className="material-icons-outlined text-lg">tune</span>
        Filters
      </button>
    </section>
  );
}
