import { useState } from "react";
import GridItem from "./GridItem";

function GridSection(){
    const gridItems = [
    { title: "Glassmorphism UI", category: "Design", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" },
    { title: "Brutalist Web", category: "Web", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400" },
    { title: "Abstract Shapes", category: "Art", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "The Neon Era", category: "Nightlife", img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400" },
    { title: "Minimalist Workspace", category: "Office", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400" },
    { title: "Nordic Interiors", category: "Home", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400" },
    { title: "Creative Portraits", category: "Photography", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { title: "Sunset Waves", category: "Nature", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400" }
  ];
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount(prev=> prev + 4);
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {gridItems.map(item => (
       <GridItem key={item.title} item={item} />
              ))}
    
    
     <div class="mt-16 flex flex-col items-center">
            <button
                onClick={loadMore}
                class="px-8 py-3 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-full font-semibold shadow-sm hover:shadow-md transition-all active:scale-95">
                Load More Content
            </button>
        </div>
        </section>
  );
}

export default GridSection;