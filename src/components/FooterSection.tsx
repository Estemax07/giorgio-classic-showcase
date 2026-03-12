const FooterSection = () => {
  return (
    <footer id="contacto" className="section-padding bg-foreground text-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">Giorgio Clasic</h3>
          <p className="font-body text-background/60 text-sm leading-relaxed">
            Manufacturas Giorgio Clasic — Calzado artesanal de alta calidad para el caballero moderno.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-background/40">
            Navegación
          </h4>
          <div className="flex flex-col gap-2">
            {["Inicio", "Catálogo", "Nosotros", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-background/60 hover:text-background transition-colors font-body"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4 text-background/40">
            Contacto
          </h4>
          <div className="flex flex-col gap-2 text-sm text-background/60 font-body">
            <p>info@giorgioclasic.com</p>
            <p>+57 300 123 4567</p>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-background/10 text-center">
        <p className="text-xs text-background/40 font-body tracking-wider">
          © 2026 Manufacturas Giorgio Clasic. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
