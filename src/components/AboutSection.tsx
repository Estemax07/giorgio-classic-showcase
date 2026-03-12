const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3 font-body">
          Nuestra Historia
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          Sobre Nosotros
        </h2>
        <div className="w-16 h-0.5 bg-accent mx-auto mb-10" />
        <p className="text-lg md:text-xl font-body font-light leading-relaxed text-primary-foreground/85 mb-8">
          Manufacturas Giorgio Clasic es una empresa dedicada a la fabricación de calzado
          de alta calidad. Con años de experiencia en el sector, nos especializamos en crear
          zapatos que combinan la artesanía tradicional con diseños contemporáneos.
        </p>
        <p className="text-lg md:text-xl font-body font-light leading-relaxed text-primary-foreground/85">
          Cada par es elaborado con los mejores materiales y un cuidado meticuloso en cada
          detalle, garantizando comodidad, durabilidad y un estilo inigualable.
        </p>
        <div className="flex justify-center gap-12 md:gap-20 mt-14">
          {[
            { number: "10+", label: "Estilos" },
            { number: "100%", label: "Cuero Genuino" },
            { number: "∞", label: "Elegancia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">{stat.number}</p>
              <p className="text-sm tracking-[0.15em] uppercase text-primary-foreground/60 mt-2 font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
