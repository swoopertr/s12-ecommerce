function GridItem({item}) {
    const {title, category, img} = item;
     return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100">
          <span className="material-icons-outlined text-lg">favorite_border</span>
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 py-1 px-2 bg-slate-100 dark:bg-slate-800 rounded-md">
            {category}
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
          A curated exploration into the depths of modern aesthetic choices and visual storytelling.
        </p>
      </div>
    </article>
  );
}
export default GridItem;