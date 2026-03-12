import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import valiente from "@/assets/Valiente.jpeg";
import stilletos from "@/assets/Stilletos1.png";
import atlas from "@/assets/Atlas.jpeg";
import verona from "@/assets/Verona.jpeg";
import aureo from "@/assets/Aureo.jpeg";
import aurora from "@/assets/Aurora.jpeg";
import terra from "@/assets/Terra.jpeg";

const products = [
  { name: "Valiente", price: "$159.000", image: valiente, category: "Tacones" },
  { name: "Stilletos", price: "$139.000", image: stilletos, category: "Tacones" },
  { name: "Atlas", price: "$130.000", image: atlas, category: "Formal" },
  { name: "Verona", price: "$169.000", image: verona, category: "Tacones" },
  { name: "Aureo", price: "$140.000", image: aureo, category: "Formal" },
  { name: "Aurora", price: "$149.000", image: aurora, category: "Tacones" },
  { name: "Terra", price: "$90.000", image: terra, category: "Sneakers" },
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
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
