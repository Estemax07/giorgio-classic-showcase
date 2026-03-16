import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ProductDetailPage from "@/components/ProductDetailPage";
import { products } from "@/data/products";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams();

  if (!slug || !(slug in products)) {
    return <NotFound />;
  }

  const product = products[slug as keyof typeof products];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductDetailPage product={product} />
      <FooterSection />
    </div>
  );
};

export default ProductPage;
