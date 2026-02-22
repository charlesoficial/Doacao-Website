import { Heart, PawPrint, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 text-primary-foreground/5">
        <PawPrint className="w-40 h-40" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-7 h-7 text-primary" />
              <span className="text-2xl font-display font-bold text-primary-foreground">
                PataAmiga
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Transformando vidas de cachorrinhos abandonados com amor, cuidado e dedicação desde 2020.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Links</h4>
            <div className="space-y-2">
              {["Início", "Cachorrinhos", "Impacto", "Doar"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-primary-foreground/50 hover:text-primary transition-colors text-sm">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Siga-nos</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/30 text-xs">
            © 2025 PataAmiga. Feito com 💛 para os peludinhos.
          </p>
          <div className="flex items-center gap-1 text-primary-foreground/30 text-xs">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-heart fill-current" />
            <span>no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
