import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados começam a aparecer já nas primeiras semanas. No entanto, resultados consistentes e escaláveis geralmente são observados após 60-90 dias, quando as campanhas estão totalmente otimizadas e os dados começam a guiar nossas decisões estratégicas.",
  },
  {
    question: "Qual é o investimento mínimo em tráfego?",
    answer: "Recomendamos um investimento mínimo de R$ 2.000/mês em tráfego para campanhas de uma plataforma (Meta ou Google) e R$ 3.000/mês para campanhas integradas em ambas plataformas. Este valor permite testar diferentes criativos e públicos para encontrar as melhores oportunidades.",
  },
  {
    question: "Como funciona o pagamento do setup?",
    answer: "No plano de 6 meses, o setup é cobrado uma única vez no início (R$ 1.500 para uma plataforma ou R$ 2.000 para ambas). No plano de 12 meses, o setup está incluído sem custo adicional, representando uma economia significativa.",
  },
  {
    question: "Vocês trabalham com qual tipo de imobiliária?",
    answer: "Atendemos imobiliárias de todos os portes - desde corretores autônomos até grandes incorporadoras. Nossa metodologia se adapta às necessidades específicas de cada cliente, seja para venda de imóveis usados, lançamentos ou locação.",
  },
  {
    question: "Como é o acompanhamento das campanhas?",
    answer: "Você terá acesso a relatórios semanais via WhatsApp, relatórios mensais em PDF detalhados, grupo exclusivo com nossa equipe para suporte direto, e reuniões estratégicas trimestrais para alinhar objetivos e próximos passos.",
  },
  {
    question: "E se eu já tentei tráfego pago e não funcionou?",
    answer: "Muitas imobiliárias tentam tráfego pago sem estratégia adequada. Nosso diferencial está em entender profundamente o setor imobiliário - sabemos as dores, objeções e motivações dos compradores. Aplicamos o Método L.E.A.D.S testado e otimizado especificamente para imobiliárias.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas principais dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
