import { motion } from "framer-motion";

type Props = {
  number: string;
  label: string;
  align?: "center" | "left";
};

const SectionLabel = ({ number, label, align = "center" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 mb-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        {number}
      </span>
      <span className="h-px w-10 bg-primary/40" />
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
};

export default SectionLabel;
