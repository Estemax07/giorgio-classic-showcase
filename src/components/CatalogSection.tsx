import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const productList = [
  {
    name: products.atlas.name,
    price: products.atlas.price,
    image: products.atlas.image,
    category: products.atlas.category,
    link: "https://shop.giorgioclasic.com/products/atlas",
  },
  {
    name: products.aureo.name,
    price: products.aureo.price,
    image: products.aureo.image,
    category: products.aureo.category,
    link: "https://shop.giorgioclasic.com/products/aureo",
  },
  {
    name: products.aurora.name,
    price: products.aurora.price,
    image: products.aurora.image,
    category: products.aurora.category,
    link: "https://shop.giorgioclasic.com/products/aurora",
  },
  {
    name: products.stilletos.name,
    price: products.stilletos.price,
    image: products.stilletos.image,
    category: products.stilletos.category,
    link: "https://shop.giorgioclasic.com/products/stilletos",
  },
  {
    name: products.terra.name,
    price: products.terra.price,
    image: products.terra.image,
    category: products.terra.category,
    link: "https://shop.giorgioclasic.com/products/terra",
  },
  {
    name: products.valiente.name,
    price: products.valiente.price,
    image: products.valiente.image,
    category: products.valiente.category,
    link: "https://shop.giorgioclasic.com/products/valiente",
  },
  {
    name: products.verona.name,
    price: products.verona.price,
    image: products.verona.image,
    category: products.verona.category,
    link: "https://shop.giorgioclasic.com/products/verona",
  },
];

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

export default CatalogSection;
