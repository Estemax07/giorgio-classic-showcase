import { motion } from "framer-motion";
import aureo from "@/assets/Aureo.jpeg";
import aurora from "@/assets/Aurora.jpeg";

const galleryImages = [
  { image: aureo, alt: "Aureo" },
  { image: aurora, alt: "Aurora" },
];

const VisualGallery = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="overflow-hidden bg-card shadow-luxury"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[420px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualGallery;
