function CategoryHeader() {
  return (
   
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <nav class="flex text-xs text-slate-500 mb-3 uppercase tracking-widest font-semibold">
            <a class="hover:text-primary transition-colors" href="#">
              Home
            </a>
            <span class="mx-2 text-slate-300">/</span>
            <span class="text-slate-900">New Arrivals</span>
          </nav>
          <h1 class="text-5xl font-extrabold tracking-tight text-charchar">
            Premium Essentials
          </h1>
          <p class="text-slate-600 mt-3 text-lg">
            Discover our curated collection of minimalist designs.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
            <span class="material-symbols-outlined text-lg">tune</span>
            Filters
          </button>
          <div class="relative group">
            <button class="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
              Sort by: Featured
              <span class="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>
        </div>
      </div>
   
  );
}

export default CategoryHeader;
