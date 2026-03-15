import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

const ProductCard = ({ name, price, image, category, link }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-card shadow-luxury overflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-5 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
          {category}
        </p>

        <h3 className="text-xl font-display text-foreground mb-2">
          {name}
        </h3>

        <p className="text-lg text-accent font-medium mb-4">
          {price}
        </p>

        <a
          href={link}
          className="inline-block px-6 py-2 bg-accent text-accent-foreground text-sm tracking-widest uppercase hover:opacity-90 transition"
        >
          VER
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
