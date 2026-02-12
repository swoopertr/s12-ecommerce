function ProductInfo({ title, category, color, price }) {
  return (
    <div className="flex justify-between items-start px-1">
      <div>
        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          {category} • {color}
        </p>
      </div>
      <p className="font-bold text-xl">${price}</p>
    </div>
  );
}

export default ProductInfo;