import { Card } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: TrendingUp,
    title: "4+ Anos de Experiência",
    description: "Profissional com mais de 4 anos de experiência no setor imobiliário, conhecendo profundamente as dores e gargalos da área.",
  },
  {
    icon: GraduationCap,
    title: "Bacharel em Administração",
    description: "Formação em Administração de Empresas e Técnico em Análise e Desenvolvimento de Sistemas.",
  },
  {
    icon: BookOpen,
    title: "MBA em Gestão de Tráfego",
    description: "Cursando MBA em Gestão de Tráfego Pago (Subido PRO) - Top 1% do mercado.",
  },
  {
    icon: Award,
    title: "Certificações Oficiais",
    description: "Certificado em Meta Ads e Google Ads pelo Pedro Sobral (Maior Referência do mercado) - Top 3%.",
  },
];

export const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Anderson Pissulin
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            O que só a minha operação entrega que o mercado não entrega?
          </p>
          <p className="text-lg text-foreground">
            Experiência focada em imobiliárias combinada com as melhores certificações do mercado
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card
                key={credential.title}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all hover:shadow-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{credential.title}</h3>
                    <p className="text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certificações Profissionais
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <p className="font-semibold">Meta Ads Certificado</p>
                <p className="text-sm text-muted-foreground">Certificação Oficial Meta</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                  </svg>
                </div>
                <p className="font-semibold">Google Ads Certificado</p>
                <p className="text-sm text-muted-foreground">Certificação Oficial Google</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
