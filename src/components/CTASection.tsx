import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,hsl(38,75%,50%),transparent_70%)]" />
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Giorgio Clasic</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground max-w-3xl mx-auto leading-tight mb-6">
            Descubre la Elegancia del Calzado Artesanal
          </h2>
          <div className="gold-underline mb-10" />
          <a
            href="#catálogo"
            className="inline-block bg-accent text-accent-foreground px-12 py-4 text-xs tracking-[0.3em] uppercase font-body font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Ver la Colección
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
