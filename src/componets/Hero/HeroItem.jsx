function HeroItem({ item }) {
    return (
        <div class="relative group h-[400px] overflow-hidden rounded-2xl cursor-pointer">
          <img
            alt="Featured collection abstract"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={item.img}
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-white">
            <span class="inline-block px-3 py-1 bg-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              {item.label}
            </span>
            <h2 class="text-2xl font-bold mb-2">{item.title}</h2>
            <p class="text-white/80 text-sm mb-4">
              {item.description}
            </p>
            <button class="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors">
              {item.buttonText}
            </button>
          </div>
        </div>
    )
}

export default HeroItem;