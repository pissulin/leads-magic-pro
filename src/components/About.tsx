import { Card } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import certificadoMeta from "@/assets/certificado-meta.jpg";
import certificadoGoogle from "@/assets/certificado-google.jpg";
import subidoPro from "@/assets/subido-pro.png";

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
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-card border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certificações Profissionais
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src={certificadoMeta} 
                  alt="Certificado Subido de Tráfego - Meta Ads" 
                  className="w-full rounded-lg shadow-card border border-border"
                />
                <div className="text-center">
                  <p className="font-semibold text-lg">Certificação Subido de Tráfego - Meta Ads</p>
                  <p className="text-sm text-muted-foreground">Pedro Sobral - Emitida em 26/07/2025</p>
                </div>
              </div>
              <div className="space-y-4">
                <img 
                  src={certificadoGoogle} 
                  alt="Certificado Subido de Tráfego - Google Ads" 
                  className="w-full rounded-lg shadow-card border border-border"
                />
                <div className="text-center">
                  <p className="font-semibold text-lg">Certificação Subido de Tráfego - Google Ads</p>
                  <p className="text-sm text-muted-foreground">Pedro Sobral - Emitida em 29/09/2025</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Subido Pro Badge */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <img 
            src={subidoPro} 
            alt="Subido PRO - Top 1% do mercado" 
            className="h-20 mx-auto"
          />
          <p className="text-sm text-muted-foreground mt-2">
            MBA em Gestão de Tráfego Pago - Top 1% do mercado
          </p>
        </div>
      </div>
    </section>
  );
};
