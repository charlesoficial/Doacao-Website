import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Adotei a Luna pela PataAmiga e ela mudou minha vida completamente. Nunca recebi tanto amor incondicional. Obrigada por existirem! 💛",
    name: "Maria Silva",
    role: "Adotou a Luna",
  },
  {
    text: "Faço doação mensal há 2 anos. Ver o antes e depois dos cachorrinhos me emociona toda vez. O trabalho dessa equipe é incrível.",
    name: "Carlos Santos",
    role: "Doador mensal",
  },
  {
    text: "Sou voluntária aos finais de semana e posso dizer: cada centavo doado é usado com muito cuidado e amor. Confiem nesse projeto!",
    name: "Ana Oliveira",
    role: "Voluntária",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Histórias que <span className="text-gradient-warm">aquecem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-3xl p-8 shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-warm-glow flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
