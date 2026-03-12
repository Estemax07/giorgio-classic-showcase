import { motion } from "framer-motion";
import shoeOxford from "@/assets/shoe-oxford.jpg";

const FeaturedProduct = () => {
  return (
    <section className="section-padding bg-marble">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden shadow-2xl"
        >
          <img
            src={shoeOxford}
            alt="Oxford Clásico - Producto Destacado"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 text-[10px] tracking-[0.3em] uppercase font-body font-semibold">
            Destacado
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="section-label">Producto Estrella</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Oxford Clásico
          </h2>
          <div className="w-12 h-[2px] bg-accent mb-8" />
          <p className="text-muted-foreground font-body leading-relaxed mb-4 text-lg">
            Nuestro Oxford insignia, elaborado con cuero italiano de primera calidad. 
            Cada par es cortado y cosido a mano por artesanos expertos, garantizando 
            un acabado impecable y una comodidad excepcional.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Suela de cuero con costura Goodyear para máxima durabilidad. 
            Disponible en negro, cognac y marrón oscuro.
          </p>
          <p className="font-display text-3xl text-foreground mb-8">$189.000</p>
          <a
            href="#catálogo"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase font-body font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver Producto
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
