import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import YouMayAlsoLikeSection from "./YouMayAlsoLikeSection";

const ProductPage = () => {
  const productData = useParams();
  return (
    <>
      <ProductData productId={productData.id} />
      <YouMayAlsoLikeSection />
    </>
  );
};

export default ProductPage;
