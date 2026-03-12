import { motion } from "framer-motion";
import shoeMonk from "@/assets/shoe-monk.jpg";
import shoeDerby from "@/assets/shoe-derby.jpg";
import shoeChelsea from "@/assets/shoe-chelsea.jpg";
import shoeFormal from "@/assets/shoe-formal.jpg";
import marbleBg from "@/assets/marble-bg.png";

const images = [
  { src: shoeMonk, alt: "Monk Strap" },
  { src: shoeDerby, alt: "Derby Cognac" },
  { src: shoeChelsea, alt: "Chelsea Boot" },
  { src: shoeFormal, alt: "Formal Patent" },
];

const VisualGallery = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${marbleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Galería</p>
          <h2 className="section-title">Nuestra Artesanía</h2>
          <div className="gold-underline" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden shadow-lg aspect-[3/4]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <span className="font-display text-xl text-primary-foreground">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualGallery;
