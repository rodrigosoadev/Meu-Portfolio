import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import SectionLabel from "./SectionLabel";


const skills = [
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "HTML", color: "#e34f26" },
  { name: "CSS", color: "#1572b6" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#339933" },
  { name: "Git", color: "#f05032" },
  { name: "UI/UX", color: "#ff7eb6" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/40 relative">
      <div className="container mx-auto">
        <SectionLabel number="03" label="Habilidades" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4 text-center"
        >
          Ferramentas do <span className="italic text-primary">ofício</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Tecnologias com as quais venho construindo, estudando e evoluindo no dia a dia.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, rotate: -2 }}
            >
              <Card
                className="p-6 border border-border bg-card hover:shadow-xl transition-shadow duration-300 cursor-default group h-full"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 ring-2 ring-transparent group-hover:ring-current"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    <span className="text-2xl font-bold">
                      {skill.name.slice(0, 2)}
                    </span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground text-center">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
