import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos Mendoza",
    text: "La calidad del cuero y el acabado son excepcionales. Mis Oxford de Giorgio Clasic se han convertido en mi calzado favorito para reuniones importantes.",
    role: "Empresario",
  },
  {
    name: "Andrés Velásquez",
    text: "Llevo más de un año usando mis Monk Strap y lucen como el primer día. La artesanía se nota en cada detalle. Sin duda, calzado de otra categoría.",
    role: "Abogado",
  },
  {
    name: "Ricardo Herrera",
    text: "Compré los Chelsea Boot y la comodidad me sorprendió. Son elegantes, duraderos y perfectos para cualquier ocasión. 100% recomendados.",
    role: "Arquitecto",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label">Testimonios</p>
        <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
        <div className="gold-underline" />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 italic">
              "{r.text}"
            </p>
            <div>
              <p className="font-display text-lg font-semibold text-foreground">{r.name}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body">
                {r.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
