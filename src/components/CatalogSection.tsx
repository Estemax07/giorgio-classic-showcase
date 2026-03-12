import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import shoeOxford from "@/assets/shoe-oxford.jpg";
import shoeLoafer from "@/assets/shoe-loafer.jpg";
import shoeMonk from "@/assets/shoe-monk.jpg";
import shoeDerby from "@/assets/shoe-derby.jpg";
import shoeChelsea from "@/assets/shoe-chelsea.jpg";
import shoeBrogue from "@/assets/shoe-brogue.jpg";
import shoeMoccasin from "@/assets/shoe-moccasin.jpg";
import shoePenny from "@/assets/shoe-penny.jpg";
import shoeFormal from "@/assets/shoe-formal.jpg";
import shoeChukka from "@/assets/shoe-chukka.jpg";

const products = [
  { name: "Oxford Clásico", price: "$189.000", image: shoeOxford, category: "Formal" },
  { name: "Loafer Nero", price: "$165.000", image: shoeLoafer, category: "Casual Elegante" },
  { name: "Monk Strap Doble", price: "$210.000", image: shoeMonk, category: "Formal" },
  { name: "Derby Cognac", price: "$175.000", image: shoeDerby, category: "Semi-formal" },
  { name: "Chelsea Boot", price: "$230.000", image: shoeChelsea, category: "Botas" },
  { name: "Brogue Wingtip", price: "$195.000", image: shoeBrogue, category: "Formal" },
  { name: "Mocasín Gamuza", price: "$145.000", image: shoeMoccasin, category: "Casual" },
  { name: "Penny Loafer", price: "$160.000", image: shoePenny, category: "Casual Elegante" },
  { name: "Formal Patent", price: "$250.000", image: shoeFormal, category: "Gala" },
  { name: "Chukka Boot", price: "$215.000", image: shoeChukka, category: "Botas" },
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
