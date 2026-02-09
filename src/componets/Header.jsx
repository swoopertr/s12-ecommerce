function Header() {
  return (
    <nav class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span class="material-icons-outlined">explore</span>
            </div>
            <span class="text-xl font-bold tracking-tight hidden sm:block">
              Discover
            </span>
          </div>
          <div class="hidden md:flex flex-1 max-w-md mx-8">
            <div class="relative w-full">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span class="material-icons-outlined text-xl">search</span>
              </span>
              <input
                class="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 dark:bg-slate-800 rounded-full text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all"
                placeholder="Search for inspiration..."
                type="text"
              />
            </div>
          </div>
          <div class="flex items-center gap-2 sm:gap-4">
            <button class="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span class="material-icons-outlined">notifications</span>
            </button>
            <button
              class="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              id="theme-toggle"
            >
              <span class="material-icons-outlined dark:hidden">dark_mode</span>
              <span class="material-icons-outlined hidden dark:block">
                light_mode
              </span>
            </button>
            <div class="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>
            <button class="flex items-center gap-2 p-1 pl-1 pr-3 rounded-full border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
              <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img
                  alt="User Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDedH6EW6xzDdmWHskEcwrwD1f7A-DWPc-lumBNFm2k0OyEQ0VwHOZgkvvxxUrMa4zTv5TILOE1p8X09JGqL4J2m9Atzq6cHmV7ls-QfIuBsQVL8vqQnJm-szD02eiY_HkzlUSeax4BHGMn1q-nI59OUuMbjd1ANy6yRS37I9di0Rv7MVlVluvKyjKsk95EO3IP9QnC7I7x4I0bMv9pKEMOVs7_XB4nxA03Cq6T29Q51v_yE-FcUTVu0JN7nJlJ-qQSpOjTYv_dysk"
                />
              </div>
              <span class="material-icons-outlined text-slate-500 text-lg">
                menu
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
