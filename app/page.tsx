import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/BrandMarquee";
import { ProductsSection } from "@/components/ProductsSection";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ROISection } from "@/components/ROISection";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BrandMarquee />
      <ProductsSection />
      <PainSection />
      <SolutionSection />
      <WhyUsSection />
      <TestimonialSection />
      <ROISection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
