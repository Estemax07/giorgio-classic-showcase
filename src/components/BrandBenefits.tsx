import { motion } from "framer-motion";
import { Shield, Hammer, Gem, Heart } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Cuero Genuino",
    description: "Seleccionamos las mejores pieles de cuero italiano para cada creación.",
  },
  {
    icon: Hammer,
    title: "Fabricación Artesanal",
    description: "Cada par es elaborado a mano por maestros artesanos con décadas de experiencia.",
  },
  {
    icon: Gem,
    title: "Diseño Elegante",
    description: "Líneas clásicas y acabados refinados que definen la elegancia masculina.",
  },
  {
    icon: Heart,
    title: "Durabilidad & Comodidad",
    description: "Construidos para durar, diseñados para el confort del día a día.",
  },
];

const BrandBenefits = () => {
  return (
    <section className="section-padding bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label">¿Por Qué Elegirnos?</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground">
          Nuestra Promesa
        </h2>
        <div className="gold-underline" />
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center group"
          >
            <div className="w-16 h-16 mx-auto mb-5 border border-accent/40 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
              <b.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
              {b.title}
            </h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              {b.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandBenefits;
