import { motion } from "framer-motion";
import oxford from "@/assets/oxford.jpeg";

const FeaturedProduct = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-card p-6 shadow-luxury">
              <div className="absolute top-10 left-10 bg-accent text-accent-foreground px-6 py-3 text-sm uppercase tracking-[0.3em]">
                Destacado
              </div>
              <img
                src={oxford}
                alt="Oxford Executive Black"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label">Producto Estrella</p>
            <h2 className="section-title mb-6">Oxford Executive Black</h2>
            <div className="gold-underline mb-8" />

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                El reflejo del éxito en cada paso. Diseñado para el hombre contemporáneo 
                que busca distinción, este calzado está minuciosamente confeccionado 
                en cuero 100% legítimo de primera calidad.
              </p>

              <p>
                Su silueta estilizada y costuras de alta precisión complementan a la 
                perfección cualquier atuendo formal, mientras su interior transpirable 
                y suela duradera aseguran confort absoluto durante toda la jornada.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-4xl font-display text-foreground mb-6">
                $159.000
              </p>

              <a
                href="https://shop.giorgioclasic.com/products/oxford"
                className="btn-luxury"
              >
                Ver producto
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
