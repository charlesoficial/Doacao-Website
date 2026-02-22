import { Heart, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-warm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <PawPrint className={`w-7 h-7 transition-colors ${scrolled ? "text-primary" : "text-warm-glow"}`} />
          <span className={`text-xl font-display font-bold transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            PataAmiga
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", href: "#" },
            { label: "Cachorrinhos", href: "#cachorrinhos" },
            { label: "Impacto", href: "#impacto" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#doar"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-warm"
        >
          <Heart className="w-4 h-4 animate-pulse-heart" />
          Doar
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
