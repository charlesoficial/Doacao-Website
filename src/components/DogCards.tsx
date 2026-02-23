import dog1 from "@/assets/caramelo_novo.jpg";
import dog2 from "@/assets/neve_novo.jpg";
import dog3 from "@/assets/pretinho_v3.png";
import { Heart, Clock, MapPin, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

const dogs = [
  {
    name: "Caramelo",
    image: dog1,
    age: "3 meses",
    location: "São Paulo, SP",
    story: "Este é o Caramelo, um cãozinho que nunca conheceu o conforto de um lar e hoje depende de ajuda para alimentação, cuidados e atendimento veterinário. Sua contribuição é essencial para que ele tenha dignidade, proteção e uma verdadeira chance de viver com amor 🐾",
    urgent: true,
    need: "Tratamento veterinário",
    raised: 320,
    goal: 800,
  },
  {
    name: "Abrigo",
    image: dog2,
    age: "2 meses",
    location: "Rio de Janeiro, RJ",
    story: "Este é um dos abrigos mais necessitados no momento. São dezenas de cães que dependem de doações para alimentação, cuidados e atendimento veterinário. Sua ajuda é essencial para que eles tenham dignidade e uma nova chance.” 🐾",
    urgent: true,
    need: "Cirurgia na patinha",
    raised: 1200,
    goal: 2000,
  },
  {
    name: "Pretinho",
    image: dog3,
    age: "4 meses",
    location: "Belo Horizonte, MG",
    story: "Este é o Pretinho, nosso guerreirinho. mais precisa muito da nossa atenção neste momento. Ele está com a patinha quebrada e precisa de uma cirurgia de R$6.000 para voltar a andar. Cada doação é um passo para que ele possa correr novamente.” 🐾",
    urgent: true,
    need: "Cirurgia na patinha",
    raised: 150,
    goal: 6000,
  },
];

const DogCards = () => {
  return (
    <section id="cachorrinhos" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">Conheça-os</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eles <span className="text-gradient-warm">precisam de você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Cada um tem uma história. Cada um espera por alguém que se importe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dogs.map((dog, i) => (
            <motion.div
              key={dog.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {dog.urgent && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.2 }}
                    className="absolute top-4 right-4 bg-heart text-heart-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
                  >
                    <Thermometer className="w-3 h-3" />
                    Urgente
                  </motion.div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-primary-foreground">{dog.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    {dog.age}
                  </span>
                  <span className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                    <MapPin className="w-3.5 h-3.5" />
                    {dog.location}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  "{dog.story}"
                </p>

                {/* Individual progress */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-foreground">{dog.need}</span>
                    <span className="text-primary font-bold">R$ {dog.raised} / R$ {dog.goal}</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-warm-glow transition-all duration-1000"
                      style={{ width: `${(dog.raised / dog.goal) * 100}%` }}
                    />
                  </div>
                </div>

                <a
                  href="#doar"
                  className="inline-flex w-full items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-warm"
                >
                  <Heart className="w-4 h-4" />
                  Ajudar {dog.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogCards;
