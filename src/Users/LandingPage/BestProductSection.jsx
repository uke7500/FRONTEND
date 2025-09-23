import HomepageProductCard from "../../components/ProductCard/HomepageProductCard";
import { useProducts } from "../../Hooks/Product";
import { Link } from "react-router-dom";

const BestProductSection = () => {
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Best Products</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl justify-items-center">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.documentId}
              className="w-full max-w-sm flex justify-center"
            >
              <Link to={"/productpage/" + product?.documentId}>
                <HomepageProductCard product={product} where="best-section" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProductSection;
