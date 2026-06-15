import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Decoração nordestina inspirada em xilogravura de cordel:
 * sol radiante, mandacarus estilizados e formas geométricas
 * que se movem com o scroll. Pure presentation — sem ponteiro.
 */
const ParallaxDecor = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotateSun = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* blob quente atrás do sol */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[8%] right-[4%] w-80 h-80 rounded-full bg-gradient-to-br from-yellow-300/30 to-orange-500/15 blur-3xl"
      />
      {/* mandacaru green orb */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[55%] -left-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl"
      />
      {/* sky blob */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[120%] right-[15%] w-80 h-80 rounded-full bg-secondary/20 blur-3xl mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Sol radiante de xilogravura */}
      <motion.svg
        style={{ rotate: rotateSun, y: y1 }}
        className="absolute top-[6%] right-[5%] w-32 h-32 md:w-44 md:h-44 text-primary/40 dark:text-primary/30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="14" fill="currentColor" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <rect
              key={i}
              x="49"
              y="6"
              width="2"
              height="14"
              fill="currentColor"
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
      </motion.svg>

      {/* Mandacarus estilizados em SVG */}
      {/* Mandacarus estilizados em SVG */}
      <Mandacaru className="absolute bottom-[8%] right-[6%] w-12 md:w-16 text-accent/30 dark:text-accent/25" delay={0} />
      <Mandacaru className="absolute top-[38%] right-[3%] w-10 md:w-14 text-accent/25 dark:text-accent/20" delay={1.4} flip />
      <Mandacaru className="absolute top-[72%] left-[4%] w-10 md:w-14 text-accent/30 dark:text-accent/25" delay={2.6} />


      {/* Estrelinhas de cordel */}
      <Star className="absolute top-[24%] left-[12%] w-3 text-primary/50" delay={0.4} />
      <Star className="absolute top-[60%] right-[22%] w-4 text-primary/40" delay={1.8} />
      <Star className="absolute top-[90%] right-[40%] w-3 text-primary/50" delay={3} />
    </div>
  );
};

const Mandacaru = ({
  className,
  delay = 0,
  flip = false,
}: {
  className?: string;
  delay?: number;
  flip?: boolean;
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 40 64"
    fill="currentColor"
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
    animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
    transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    {/* tronco */}
    <rect x="16" y="18" width="8" height="42" rx="4" />
    {/* braço esquerdo */}
    <rect x="4" y="28" width="6" height="18" rx="3" />
    <rect x="4" y="28" width="12" height="6" rx="3" />
    {/* braço direito */}
    <rect x="30" y="32" width="6" height="22" rx="3" />
    <rect x="24" y="32" width="12" height="6" rx="3" />
    {/* florzinha no topo */}
    <circle cx="20" cy="14" r="4" />
  </motion.svg>
);

const Star = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <path d="M12 2l2 7h7l-5.5 4.5L17.5 22 12 17.5 6.5 22l2-8.5L3 9h7z" />
  </motion.svg>
);

export default ParallaxDecor;
