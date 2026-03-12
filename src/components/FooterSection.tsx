import logo from "@/assets/logo-giorgio.png";

const FooterSection = () => {
  return (
    <footer id="contacto" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Giorgio Clasic" className="h-12 mb-4" />
          <p className="font-body text-primary-foreground/50 text-sm leading-relaxed">
            Artesanía en calzado de prestigio. Cada par cuenta una historia de tradición y excelencia.
          </p>
        </div>
        <div>
          <h4 className="font-body text-[10px] tracking-[0.3em] uppercase mb-4 text-accent font-semibold">
            Navegación
          </h4>
          <div className="flex flex-col gap-2">
            {["Inicio", "Catálogo", "Nosotros", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors font-body"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-[10px] tracking-[0.3em] uppercase mb-4 text-accent font-semibold">
            Contacto
          </h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/50 font-body">
            <p>info@giorgioclasic.com</p>
            <p>+57 300 123 4567</p>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-14 pt-8 border-t border-primary-foreground/10 text-center">
        <p className="text-xs text-primary-foreground/30 font-body tracking-wider">
          © 2026 Manufacturas Giorgio Clasic. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
