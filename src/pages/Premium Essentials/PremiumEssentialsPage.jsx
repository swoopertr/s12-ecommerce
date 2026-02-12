import CategoryHeader from "./Components/CategoryHeader.jsx";
import CategoryListing from "./Components/CategoryListing.jsx";
import products from "./PremiumEssentials.jsx";

function PremiumEssentials() {
  return (
    <>
      <main class="max-w-7xl mx-auto px-6 py-12">
        <CategoryHeader />
        <CategoryListing list={products} />
      </main>
    </>
  );
}

export default PremiumEssentials;
