import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Nuestra Historia</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-8">
            Sobre Nosotros
          </h2>
          <div className="gold-underline mb-10" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-body font-light leading-relaxed text-primary-foreground/80 mb-8"
        >
          Manufacturas Giorgio Clasic es una empresa dedicada a la fabricación de calzado
          de alta calidad. Con años de experiencia en el sector, nos especializamos en crear
          zapatos que combinan la artesanía tradicional con diseños contemporáneos.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl font-body font-light leading-relaxed text-primary-foreground/80"
        >
          Cada par es elaborado con los mejores materiales y un cuidado meticuloso en cada
          detalle, garantizando comodidad, durabilidad y un estilo inigualable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-12 md:gap-20 mt-14"
        >
          {[
            { number: "10+", label: "Estilos" },
            { number: "100%", label: "Cuero Genuino" },
            { number: "∞", label: "Elegancia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">{stat.number}</p>
              <p className="text-sm tracking-[0.15em] uppercase text-primary-foreground/50 mt-2 font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
