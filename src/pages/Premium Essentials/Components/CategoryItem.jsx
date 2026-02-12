function CategoryItem({data}) {

// {
//         id: 1,
//         title: "Signature Bomber Jacket",
//         category: "Outerwear • Obsidian Grey",
//         price: 249,
//         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2C5H7Z6e8AesDoh2qcmZxOHgERsJEs0nGyBcjXYqmKI1LP943NK7lOwBqUK0646srOec3TnKhYseMzaLRzbSn2-VSuja2gVSNCSeJre9-OiewtImVcIWpOX6ys9v46B1_U71qCL5HS1kRZXwjvNSbVdTrRbr3iRL3AlXiw_iRhaoAuHl33x6ngSrMs75tUYbrKIncNNQOoVI8rBCZBsqNWoR4TfVrU6rTzD14PPv6jyNs7oghSSvd92Vx7Tf3QLZ5-wh2RTxvA0Q"
//     }

  return (
    <>
      <div class="group cursor-pointer">
        {/* <CategoryImageFavBtn imgSrc={data.image} addFav={{}} /> */}
        <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white border border-slate-100 mb-5 shadow-sm group-hover:shadow-md transition-all duration-300">
          <img
            alt="Dark grey bomber jacket"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={data.image}
          />
          <div class="absolute top-4 right-4">
            <button class="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-all shadow-sm">
              <span class="material-symbols-outlined text-[22px]">
                favorite
              </span>
            </button>
          </div>
        </div>

        <div class="flex justify-between items-start px-1">
          <div>
            <h3 class="font-bold text-xl group-hover:text-primary transition-colors">
              {data.title}
            </h3>
            <p class="text-slate-500 text-sm mt-1">{data.category}</p>
          </div>
          <p class="font-bold text-xl">${data.price}</p>
        </div>
        <button class="w-full mt-5 py-4 bg-primary text-white rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
          <span class="material-symbols-outlined text-lg">shopping_cart</span>
          Add to Bag
        </button>
      </div>
    </>
  );
}
export default CategoryItem;