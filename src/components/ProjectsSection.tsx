
import React, { useState, useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";


const projects = [
  {
    id: 1,
    title: "App de Clima NE",
    description: "Aplicação de previsão do tempo com foco nas condições climáticas do Nordeste brasileiro.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "API", "Responsive"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Gestor de Tarefas",
    description: "Sistema TypeScript para organização de tarefas e projetos pessoais com notificações.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "TailwindCSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Portal Nordestino",
    description: "Site informativo sobre cultura, gastronomia e pontos turísticos do Nordeste.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Dashboard Analítico",
    description: "Painel administrativo para visualização de dados e métricas comerciais.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "Charts"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const filters = ["Todos", "JavaScript", "TypeScript", "React"];
  
  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.includes(activeFilter))
      );
  
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionLabel number="02" label="Projetos" />
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-10 text-center">
          Coisas que <span className="italic text-primary">construí</span>
        </h2>
        
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant="outline"
              className={cn(
                "border-nordeste-argila hover:bg-nordeste-argila/10 transition-all",
                activeFilter === filter ? "bg-nordeste-argila text-white hover:bg-nordeste-argila/90" : ""
              )}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Carousel Navigation */}
        <div className="flex justify-end mb-4 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollCarousel("left")}
            className="rounded-full hover:bg-nordeste-verdeMandacaru/10"
          >
            <ArrowLeft className="h-4 w-4 text-nordeste-verdeMandacaru" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollCarousel("right")}
            className="rounded-full hover:bg-nordeste-verdeMandacaru/10"
          >
            <ArrowRight className="h-4 w-4 text-nordeste-verdeMandacaru" />
          </Button>
        </div>
        
        {/* Projects Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="flex items-center justify-center w-full min-h-[300px]">
              <p className="text-gray-500 text-lg">Nenhum projeto encontrado com este filtro.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="min-w-[300px] max-w-[320px] snap-start bg-white hover:shadow-lg transition-all duration-300 border border-nordeste-argila/10 animate-fade-in-up">
      <CardHeader className="p-0 overflow-hidden h-48">
        <div className="h-full w-full bg-nordeste-azulCeu/20">
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-nordeste-argila/50">Imagem do Projeto</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-xl font-bold font-playfair text-nordeste-argila mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-nordeste-areia text-nordeste-argila px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between px-4 pb-4">
        <Button 
          onClick={() => window.open(project.github, "_blank")}
          variant="outline"
          size="sm"
          className="text-nordeste-argila border-nordeste-argila/20 hover:bg-nordeste-argila/10"
        >
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </Button>
        
        <Button 
          onClick={() => window.open(project.demo, "_blank")}
          size="sm"
          className="bg-nordeste-verdeMandacaru hover:bg-nordeste-verdeMandacaru/90"
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
