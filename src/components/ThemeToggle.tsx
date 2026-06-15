import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative overflow-hidden group border-2 hover:scale-110 transition-all duration-300"
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? 0 : 180,
            scale: theme === "dark" ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === "dark" ? -180 : 0,
            scale: theme === "dark" ? 0 : 1 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        <span className="sr-only">Alternar tema</span>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
