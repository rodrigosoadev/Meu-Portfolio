import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ParallaxDecor from "@/components/ParallaxDecor";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="bg-background min-h-screen transition-colors duration-300 relative overflow-x-hidden bg-grain">
      <ScrollProgressBar />
      <ParallaxDecor />

      <div className="relative z-10">
        <Header />
        <HeroSection />

        <ScrollReveal direction="up">
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.05}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <SkillsSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <ContactSection />
        </ScrollReveal>

        <Footer />
        <ScrollToTopButton />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
