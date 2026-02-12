import FavoriteButton from './FavoriteButton'

function ProductImage ({ src, alt, badge }) {
    return (
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white border border-slate-100 mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
            <img
                alt= {alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={src}
      />
      <FavoriteButton />
      {badge && (
        <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
          {badge}
        </span>
      )}
    </div>
  );
}

export default ProductImage;
