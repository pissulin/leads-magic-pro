import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const metaAdsFeatures = [
  "Criação e configuração Fanpage",
  "Criação e configuração Business Manager",
  "Criação e configuração da Conta de Anúncios",
  "Sincronização de ativos (Facebook, Instagram, Pixel, WhatsApp Business e Site)",
  "Criação e configuração de públicos",
  "Definição dos métodos de pagamentos",
];

const googleAdsFeatures = [
  "Criação e configuração Google Meu Negócio*",
  "Criação e configuração da Conta de Anúncios",
  "Criação e configuração do Google Analytics",
  "Criação e configuração de públicos",
  "Definição dos métodos de pagamentos",
];

const supportFeatures = [
  "Grupo de WhatsApp com ambas equipes",
  "Relatório semanal pelo grupo do WhatsApp",
  "Relatório mensal em PDF",
  "Relatório semanal de criativos ativos",
  "Desenho estratégico das campanhas de tráfego pago",
  "Otimizações das campanhas",
  "Acompanhamento diário",
  "Suporte na produção de mídias",
  "Reunião estratégica trimestral",
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Você Recebe
          </h2>
          <p className="text-xl text-muted-foreground">
            Setup completo e gestão estratégica das suas campanhas de tráfego pago
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Meta Ads */}
          <Card className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Meta Ads</h3>
            </div>
            <ul className="space-y-3">
              {metaAdsFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Google Ads */}
          <Card className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Google Ads</h3>
            </div>
            <ul className="space-y-3">
              {googleAdsFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Support Section */}
        <Card className="p-8 bg-gradient-card border-primary/30 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Transparência, Suporte e Estratégia
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {supportFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
