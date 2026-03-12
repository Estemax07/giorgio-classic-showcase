import { motion } from "framer-motion";
import heroImage from "@/assets/hero-shoes.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Calzado de lujo Giorgio Clasic"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-label text-accent"
        >
          Artesanía en Calzado de Prestigio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground leading-[0.95] mb-6"
        >
          Giorgio
          <br />
          <span className="italic font-light">Clasic</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-20 h-[2px] bg-accent mb-8 origin-left"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-primary-foreground/80 text-lg md:text-xl font-body font-light max-w-lg mb-10 leading-relaxed"
        >
          Calzado artesanal con la elegancia y tradición que define al caballero moderno.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          href="#catálogo"
          className="inline-block bg-accent text-accent-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase font-body font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Ver Colección
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
