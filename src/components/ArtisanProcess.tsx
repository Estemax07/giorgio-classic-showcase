import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Selección del Cuero",
    description:
      "Cada pieza de cuero es inspeccionada y seleccionada cuidadosamente para garantizar la más alta calidad y textura.",
  },
  {
    number: "02",
    title: "Fabricación Artesanal",
    description:
      "Nuestros maestros artesanos cortan, cosen y moldean cada zapato siguiendo técnicas tradicionales italianas.",
  },
  {
    number: "03",
    title: "Acabado a Mano",
    description:
      "Cada par recibe un acabado manual: pulido, teñido y acondicionado para un brillo y suavidad excepcionales.",
  },
];

const ArtisanProcess = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="section-label">Nuestro Proceso</p>
        <h2 className="section-title">El Arte de la Creación</h2>
        <div className="gold-underline" />
      </motion.div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-center relative"
          >
            <span className="font-display text-7xl font-light text-accent/20 block mb-4">
              {step.number}
            </span>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              {step.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {step.description}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 -right-6 w-12 h-[1px] bg-accent/30" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ArtisanProcess;
