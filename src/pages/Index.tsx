import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import ServicesSection from "@/components/ServicesSection";
import AboutCompanySection from "@/components/AboutCompanySection";
import PromisesSection from "@/components/PromisesSection";
import OurWorkSection from "@/components/OurWorkSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <CategoryBar />
      <AboutCompanySection />
      <ServicesSection />
      <PromisesSection />
      <StatsSection />
      <OurWorkSection />
      {/* ========== DUPLICATE WORK PROCESS SECTION (commented out) ==========
      <WorkProcessSection />
      ========== END DUPLICATE ========== */}
      <WorkProcessSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Index;
