import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre gestão de tráfego para imobiliárias.", "_blank");
  };

  const handleCTA = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern cityscape" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <span className="text-primary font-semibold">@andersonp.ads</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground">Gestão de Tráfego Profissional</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Transforme Sua Imobiliária em uma{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Máquina de Vendas
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Atraia clientes qualificados todos os dias com o{" "}
            <span className="text-primary font-semibold">Método L.E.A.D.S</span> de tráfego pago estratégico
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={handleCTA}
            >
              Quero Aumentar Minhas Vendas
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto pt-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">+4</div>
              <div className="text-sm md:text-base text-muted-foreground">Anos no Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm md:text-base text-muted-foreground">Foco em Imobiliárias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">2x</div>
              <div className="text-sm md:text-base text-muted-foreground">Retorno Médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
