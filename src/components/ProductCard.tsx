import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-marble mb-4 aspect-[3/4] shadow-md group-hover:shadow-xl transition-shadow duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground font-body">Ver detalles</span>
        </div>
      </div>
      <p className="text-[10px] tracking-[0.25em] uppercase text-accent mb-1 font-body font-semibold">
        {category}
      </p>
      <h3 className="font-display text-lg font-medium text-foreground mb-1">
        {name}
      </h3>
      <p className="text-foreground/70 font-semibold font-body text-sm">{price}</p>
    </motion.div>
  );
};

export default ProductCard;
