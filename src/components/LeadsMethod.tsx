import { Target, MessageSquare, Calendar, TrendingUp, Repeat } from "lucide-react";
import { Card } from "@/components/ui/card";

const methodSteps = [
  {
    letter: "L",
    title: "Levar",
    subtitle: "Tráfego para seus imóveis",
    description: "Anúncios pagos altamente segmentados no Google e Instagram que levam clientes certos para seus anúncios.",
    icon: Target,
  },
  {
    letter: "E",
    title: "Estimular",
    subtitle: "A conversa com o lead",
    description: "Criamos campanhas que despertam interesse real e incentivam o contato imediato via WhatsApp.",
    icon: MessageSquare,
  },
  {
    letter: "A",
    title: "Aumentar",
    subtitle: "O número de atendimentos",
    description: "Facilitamos o caminho do lead até o corretor com CTAs estratégicos e automações inteligentes.",
    icon: Calendar,
  },
  {
    letter: "D",
    title: "Direcionar",
    subtitle: "A verba para o que dá retorno",
    description: "Vamos investir onde está performando melhor, com base em dados e testes.",
    icon: TrendingUp,
  },
  {
    letter: "S",
    title: "Sustentar",
    subtitle: "O crescimento contínuo",
    description: "A cada mês analisamos, corrigimos e escalamos o que está funcionando mantendo as vendas em movimento.",
    icon: Repeat,
  },
];

export const LeadsMethod = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Método{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              L.E.A.D.S
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Você não só atrai mais leads, como também converte e retém.
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {methodSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.letter}
                className="relative p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Letter Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold shadow-glow">
                  {step.letter}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-primary text-sm mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/30">
            <p className="text-xl font-semibold mb-2">
              Você não só atrai mais leads, como também converte e retém.
            </p>
            <p className="text-muted-foreground">
              A cada mês analisamos, corrigimos e escalamos o que está funcionando mantendo as vendas em movimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
