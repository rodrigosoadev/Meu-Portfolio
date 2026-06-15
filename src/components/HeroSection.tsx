import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/5500000000000", "_blank");
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-4xl">
          {/* Badge disponível */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-accent/40 bg-accent/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-foreground/80">
              Disponível para novos projetos
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-2 mb-4 text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground"
          >
            <MapPin size={12} className="text-primary" />
            Desenvolvedor Web · Nordeste, Brasil
          </motion.div>

          {/* Nome em duas linhas com peso + itálico */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-foreground leading-[0.95] mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
          >
            <span className="block">Rodrigo</span>
            <span className="block italic font-semibold gradient-name">
              Soares
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-foreground/85 mb-4 max-w-2xl font-light leading-relaxed"
          >
            Criando soluções modernas com{" "}
            <span className="font-medium text-primary">JavaScript</span> e{" "}
            <span className="font-medium text-primary">TypeScript</span>, com foco
            em interfaces intuitivas e experiências digitais com alma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={handleContactClick}
                size="lg"
                className="btn-shimmer bg-primary hover:bg-primary text-primary-foreground px-7 py-6 rounded-full shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)] hover:shadow-[0_25px_70px_-15px_hsl(var(--primary)/0.6)] transition-shadow"
              >
                <span className="flex items-center gap-2 font-medium">
                  Fale Comigo
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="inline-flex"
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 hover:border-foreground/40 bg-transparent hover:bg-foreground/5 text-foreground px-7 py-6 rounded-full transition-all"
              >
                Ver Projetos
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span className="font-mono text-xs tracking-widest uppercase">
              Estudando
            </span>
            <span className="h-px w-8 bg-border" />
            <span>React · Vite · API REST · MongoDB</span>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Role para descobrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
