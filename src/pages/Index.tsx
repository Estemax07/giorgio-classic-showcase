import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import FeaturedProduct from "@/components/FeaturedProduct";
import BrandBenefits from "@/components/BrandBenefits";
import ArtisanProcess from "@/components/ArtisanProcess";
import VisualGallery from "@/components/VisualGallery";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ProductDetailPage from "@/components/ProductDetailPage";
import { products } from "@/data/products";

const Index = () => {
  const params = new URLSearchParams(window.location.search);
  const productSlug = params.get("product");

  if (productSlug && productSlug in products) {
    const product = products[productSlug as keyof typeof products];

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <ProductDetailPage product={product} />
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProduct />
      <BrandBenefits />
      <ArtisanProcess />
      <CatalogSection />
      <AboutSection />
      <VisualGallery />
      <Testimonials />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
