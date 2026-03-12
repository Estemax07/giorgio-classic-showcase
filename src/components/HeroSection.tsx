import heroImage from "@/assets/hero-shoes.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Calzado de lujo Giorgio Clasic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-2xl">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4 font-body animate-fade-in-up">
          Manufacturas
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Giorgio
          <br />
          <span className="italic font-normal">Clasic</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body font-light max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Calzado artesanal con la elegancia y tradición que define al caballero moderno.
        </p>
        <a
          href="#catálogo"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 text-sm tracking-[0.2em] uppercase font-body hover:bg-accent/90 transition-colors animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Ver Colección
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
