import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const productList = Object.values(products).map((product) => ({
  name: product.name,
  price: product.price,
  image: product.image,
  category: product.category,
  link: `/products/${product.slug}`,
}));

const CatalogSection = () => {
  return (
    <section id="catálogo" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label">Nuestra Colección</p>
        <h2 className="section-title">Catálogo</h2>
        <div className="gold-underline" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {productList.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
