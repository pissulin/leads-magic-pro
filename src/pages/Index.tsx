import { Hero } from "@/components/Hero";
import { LeadsMethod } from "@/components/LeadsMethod";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LeadsMethod />
      <Services />
      <About />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
