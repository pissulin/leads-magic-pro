import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export const CTA = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de transformar minha imobiliária em uma máquina de vendas.", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para Transformar Sua Imobiliária em uma{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Máquina de Vendas
            </span>
            ?
          </h2>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto">
            Comece hoje a atrair clientes qualificados todos os dias com o Método L.E.A.D.S
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="whatsapp"
              className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2" />
              Falar com Especialista
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-foreground/70">
              Resposta em até 1 hora • Consulta gratuita • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
