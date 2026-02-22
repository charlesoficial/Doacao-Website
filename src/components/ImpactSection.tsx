import { Heart, Stethoscope, Home, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: Heart, number: 2340, suffix: "+", label: "Vidas Salvas", description: "Cachorrinhos resgatados e cuidados" },
  { icon: Home, number: 1850, suffix: "+", label: "Lares Encontrados", description: "Adoções realizadas com sucesso" },
  { icon: Stethoscope, number: 5600, suffix: "+", label: "Atendimentos", description: "Consultas veterinárias gratuitas" },
  { icon: Users, number: 890, suffix: "+", label: "Voluntários", description: "Pessoas dedicadas à causa" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref}>
      {count.toLocaleString("pt-BR")}{suffix}
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section id="impacto" className="py-24 bg-warm-gradient relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute top-20 right-20 text-primary/5 rotate-12">
        <Heart className="w-64 h-64" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Nossos números</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso <span className="text-gradient-warm">Impacto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Cada doação faz a diferença na vida de um cachorrinho que precisa de ajuda
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-3xl p-6 md:p-8 text-center shadow-warm transition-all hover:-translate-y-2 hover:shadow-warm-lg group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-5 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Goal progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-card rounded-3xl p-8 shadow-warm max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-foreground">Meta do Mês</h3>
            <span className="text-sm font-semibold text-primary">R$ 18.500 / R$ 25.000</span>
          </div>
          <div className="h-4 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "74%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-warm-glow"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Faltam apenas <strong className="text-foreground">R$ 6.500</strong> para completar a meta! Ajude a chegar lá 💛
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
