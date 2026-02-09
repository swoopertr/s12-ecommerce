function Footer() {
  return (
    <footer class="mt-20 border-t border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span class="material-icons-outlined text-sm">explore</span>
            </div>
            <span class="text-lg font-bold">Discover</span>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Connecting curious minds with extraordinary content. Your daily
            source of visual and intellectual inspiration.
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-sm uppercase tracking-wider">
            Explore
          </h4>
          <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                Popular Picks
              </a>
            </li>
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                New Arrivals
              </a>
            </li>
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                Categories
              </a>
            </li>
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                Collections
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                Careers
              </a>
            </li>
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                Contact
              </a>
            </li>
            <li>
              <a class="hover:text-primary transition-colors" href="#">
                Press Kit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-sm uppercase tracking-wider">
            Subscribe
          </h4>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Stay updated with the latest trends.
          </p>
          <div class="flex gap-2">
            <input
              class="flex-1 px-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="Email address"
              type="email"
            />
            <button class="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2024 Discover Inc. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="hover:text-slate-600 dark:hover:text-slate-200" href="#">
            Privacy Policy
          </a>
          <a class="hover:text-slate-600 dark:hover:text-slate-200" href="#">
            Terms of Service
          </a>
          <a class="hover:text-slate-600 dark:hover:text-slate-200" href="#">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;