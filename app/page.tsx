import { Hero } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ROISection } from "@/components/ROISection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainSection />
      <SolutionSection />
      <WhyUsSection />
      <ROISection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
