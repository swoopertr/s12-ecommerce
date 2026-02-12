import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <ProductImage 
        src={product.image} 
        alt={product.alt} 
        badge={product.badge}
      />
      <ProductInfo
        title={product.title}
        category={product.category}
        color={product.color}
        price={product.price}
      />
      <button className="w-full mt-5 py-4 bg-primary text-white rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
        <span className="material-symbols-outlined text-lg">shopping_cart</span>
        Add to Bag
      </button>
    </div>
  );
}

export default ProductCard;