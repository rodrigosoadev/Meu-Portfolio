import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Sun } from "lucide-react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // sun travels horizontally with the scroll progress
  const left = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-nordeste-verdeMandacaru via-primary to-nordeste-azulCeu shadow-[0_0_10px_hsl(var(--primary))]"
      />

      {/* Sun icon traveling along the bar */}
      <motion.div
        style={{ left, rotate }}
        className="fixed top-[-12px] z-[101] -translate-x-1/2 pointer-events-none text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
      >
        <Sun className="w-7 h-7 fill-yellow-300" />
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;
