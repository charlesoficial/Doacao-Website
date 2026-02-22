import heroDog from "@/assets/hero-dog.jpg";
import { Heart, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroDog}
          alt="Cachorrinho triste precisando de ajuda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-heart/20 backdrop-blur-md border border-heart/30 text-heart-foreground px-5 py-2.5 rounded-full mb-8"
          >
            <Heart className="w-4 h-4 fill-current text-heart" />
            <span className="text-sm font-semibold tracking-wide uppercase text-heart">
              Ajude um amiguinho
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-8"
          >
            Eles só
            <br />
            precisam de{" "}
            <span className="text-warm-glow italic">amor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-12 leading-relaxed max-w-lg"
          >
            Centenas de cachorrinhos abandonados esperam por um gesto de carinho.
            Sua doação pode salvar uma vida e dar um lar a quem mais precisa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#doar"
              className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full text-lg font-bold shadow-warm-lg transition-all hover:scale-105 active:scale-95"
            >
              <Heart className="w-5 h-5 animate-pulse-heart group-hover:scale-125 transition-transform" />
              Doar Agora
            </a>
            <a
              href="#cachorrinhos"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-md hover:bg-primary-foreground/20 text-primary-foreground px-10 py-5 rounded-full text-lg font-semibold transition-all border border-primary-foreground/20 hover:border-primary-foreground/40"
            >
              Conhecer os Peludinhos
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex items-center gap-8 mt-16"
          >
            {[
              { num: "2.340+", label: "resgatados" },
              { num: "1.850+", label: "adotados" },
              { num: "100%", label: "transparência" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-primary-foreground">{s.num}</div>
                <div className="text-xs text-primary-foreground/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#impacto" className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Saiba mais</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
