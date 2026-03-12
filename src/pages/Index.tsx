import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProduct from "@/components/FeaturedProduct";
import BrandBenefits from "@/components/BrandBenefits";
import CatalogSection from "@/components/CatalogSection";
import ArtisanProcess from "@/components/ArtisanProcess";
import VisualGallery from "@/components/VisualGallery";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProduct />
      <BrandBenefits />
      <CatalogSection />
      <ArtisanProcess />
      <VisualGallery />
      <Testimonials />
      <CTASection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
