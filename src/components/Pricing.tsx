import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "meta-or-google",
    name: "Meta Ads ou Google Ads",
    description: "Escolha a plataforma ideal para o seu negócio",
    prices: {
      6: {
        management: "R$ 1.197",
        setup: "R$ 1.500",
        traffic: "R$ 2.000",
      },
      12: {
        management: "R$ 1.197",
        setup: "Incluído",
        traffic: "R$ 2.000",
      },
    },
    features: [
      "Setup completo da plataforma",
      "Gestão profissional de tráfego",
      "Relatórios semanais",
      "Otimização contínua",
      "Suporte via WhatsApp",
    ],
  },
  {
    id: "both",
    name: "Meta Ads + Google Ads",
    description: "Potencialize seus resultados com ambas plataformas",
    prices: {
      6: {
        management: "R$ 1.997",
        setup: "R$ 2.000",
        traffic: "R$ 3.000",
      },
      12: {
        management: "R$ 1.997",
        setup: "Incluído",
        traffic: "R$ 3.000",
      },
    },
    features: [
      "Setup completo de ambas plataformas",
      "Gestão integrada Meta + Google",
      "Relatórios semanais e mensais",
      "Otimização contínua",
      "Suporte via WhatsApp",
      "Reunião estratégica trimestral",
    ],
    highlighted: true,
  },
];

export const Pricing = () => {
  const [period, setPeriod] = useState<6 | 12>(12);

  const handleContact = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de contratar a gestão de tráfego.", "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investimento
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Escolha o plano ideal para transformar sua imobiliária
          </p>

          {/* Period Toggle */}
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-muted">
            <button
              onClick={() => setPeriod(6)}
              className={`px-6 py-2 rounded-full transition-all ${
                period === 6
                  ? "bg-gradient-accent text-primary-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              6 meses
            </button>
            <button
              onClick={() => setPeriod(12)}
              className={`px-6 py-2 rounded-full transition-all ${
                period === 12
                  ? "bg-gradient-accent text-primary-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              12 meses
            </button>
          </div>
          {period === 12 && (
            <p className="text-sm text-primary mt-2">Setup incluído! Economize R$ 1.500 - R$ 2.000</p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`p-8 transition-all ${
                plan.highlighted
                  ? "bg-gradient-card border-primary shadow-glow scale-105"
                  : "bg-gradient-card border-border hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-accent text-sm font-semibold mb-4">
                  Mais Escolhido
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Pricing Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Gestão de Tráfego Pago</span>
                  <span className="text-xl font-bold">{plan.prices[period].management}/mês</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Setup + GMN</span>
                  <span className="text-xl font-bold text-primary">
                    {plan.prices[period].setup}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Investimento Tráfego</span>
                  <span className="text-xl font-bold">{plan.prices[period].traffic}/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={handleContact}
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-accent hover:shadow-glow"
                    : "bg-primary hover:bg-primary/90"
                }`}
                size="lg"
              >
                Contratar Agora
              </Button>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Valores de investimento em tráfego são sugeridos e podem ser ajustados conforme necessidade
        </p>
      </div>
    </section>
  );
};
