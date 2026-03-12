import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
          Giorgio Clasic
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["Inicio", "Catálogo", "Nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {["Inicio", "Catálogo", "Nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
