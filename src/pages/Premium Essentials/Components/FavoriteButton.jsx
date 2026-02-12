function FavoriteButton() {
  return (
    <div className="absolute top-4 right-4">
      <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all shadow-sm">
        <span className="material-symbols-outlined text-[22px]">favorite</span>
      </button>
    </div>
  );
}

export default FavoriteButton;