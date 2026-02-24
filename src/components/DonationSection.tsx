import { Heart, HandHeart, Sparkles, Shield, CreditCard } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const amounts = [10, 25, 50, 100, 500, 900];

const checkoutLinks: Record<number, string> = {
  10: "https://pay.s6x.com.br/hWjq1XeF",
  25: "https://pay.s6x.com.br/chZAtymO",
  50: "https://pay.s6x.com.br/IFYMMDHN",
  100: "https://pay.s6x.com.br/VJLUHZZO",
  500: "https://pay.s6x.com.br/5JRQMQHL",
  900: "https://pay.s6x.com.br/FKRWUTJ5",
};

const DonationSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const getActiveAmount = (): number => {
    if (isCustom && custom) return Number(custom);
    if (selected !== null) return selected;
    return 0;
  };

  const handleDonate = () => {
    const amount = getActiveAmount();

    if (!amount || amount <= 0) {
      alert("Por favor, selecione ou digite um valor para doar.");
      return;
    }

    const link = checkoutLinks[amount];

    if (link) {
      window.open(link, "_blank");
    } else {
      // Custom amount — redirect to WhatsApp
      window.open(
        "https://wa.me/5511965749806?text=quero%20doar%20um%20valor%20diferente%20dos%20valores%20definidos",
        "_blank"
      );
    }
  };

  const activeAmount = getActiveAmount();

  return (
    <section id="doar" className="py-16 sm:py-24 bg-warm-gradient relative overflow-hidden">
      {/* Decorative elements — hidden on very small screens */}
      <div className="absolute top-10 left-10 text-primary/5 -rotate-12 hidden sm:block">
        <Heart className="w-48 h-48" />
      </div>
      <div className="absolute bottom-10 right-10 text-primary/5 rotate-12 hidden sm:block">
        <HandHeart className="w-56 h-56" />
      </div>
      <div className="absolute top-1/2 left-1/3 text-primary/5 hidden lg:block">
        <Heart className="w-24 h-24" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Faça a diferença hoje</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Quanto você pode{" "}
              <span className="text-gradient-warm">doar?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Qualquer valor ajuda. Com R$10 já alimentamos um cachorrinho por uma semana inteira.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-3xl p-5 sm:p-8 md:p-10 shadow-warm-lg border border-border"
          >
            {/* Amount selection — 2 cols on mobile, 5 cols on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-6">
              {amounts.map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelected(amount);
                    setIsCustom(false);
                    setCustom("");
                  }}
                  className={`py-3 sm:py-3.5 px-3 sm:px-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 ${!isCustom && selected === amount
                    ? "bg-primary text-primary-foreground shadow-warm scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  R${amount}
                </motion.button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-muted-foreground mb-2">
                Ou digite outro valor:
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-base sm:text-lg">
                  R$
                </span>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Outro valor"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setIsCustom(true);
                    setSelected(null);
                  }}
                  onFocus={() => {
                    setIsCustom(true);
                    setSelected(null);
                  }}
                  className="w-full pl-12 sm:pl-14 pr-4 py-3.5 sm:py-4 rounded-2xl bg-secondary text-foreground placeholder:text-muted-foreground border-2 border-transparent focus:border-primary focus:outline-none text-base sm:text-lg font-semibold transition-all"
                />
              </div>
            </div>

            {/* Dynamic WhatsApp Message for custom amounts */}
            {isCustom && custom && !isNaN(parseFloat(custom)) && (
              <div className="mb-6 sm:mb-8 bg-secondary/60 rounded-2xl p-4 text-center border border-primary/10">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Para doar <strong className="text-primary font-bold text-base">R$ {parseFloat(custom).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> entre em contato conosco pelo WhatsApp{" "}
                  <a
                    href="https://wa.me/5511965749806?text=quero%20doar%20um%20valor%20diferente%20dos%20valores%20definidos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    wa.me/5511965749806
                  </a>{" "}
                  ou selecione um dos valores definidos acima.
                </p>
              </div>
            )}

            {!isCustom && (
              <div className="mb-6 sm:mb-8 bg-secondary/30 rounded-2xl p-4 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Somente os valores sugeridos podem ser doados diretamente pelo site. Para outros valores, entre em contato.
                </p>
              </div>
            )}

            {/* Info */}
            <div className="bg-warm-light rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 flex items-start gap-3 border border-primary/10">
              <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 fill-current" />
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                <strong>100% da sua doação</strong> vai diretamente para alimentação,
                cuidados veterinários e abrigo dos cachorrinhos resgatados.
              </p>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDonate}
              disabled={!activeAmount || activeAmount <= 0}
              className={`w-full py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-warm-lg transition-all flex items-center justify-center gap-3 ${activeAmount && activeAmount > 0
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-secondary text-muted-foreground cursor-not-allowed"
                }`}
            >
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 animate-pulse-heart" />
              {activeAmount && activeAmount > 0
                ? `Doar R$${activeAmount}`
                : "Selecione um valor"}
            </motion.button>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-5 sm:mt-6 text-muted-foreground">
              <span className="flex items-center gap-1.5 text-xs">
                <Shield className="w-3.5 h-3.5" />
                Pagamento seguro
              </span>
              <span className="flex items-center gap-1.5 text-xs">
                <CreditCard className="w-3.5 h-3.5" />
                PIX, cartão e boleto
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
