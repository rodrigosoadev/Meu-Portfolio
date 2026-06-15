
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import SectionLabel from "./SectionLabel";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/40">
      <div className="container mx-auto">
        <SectionLabel number="01" label="Sobre" />
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-12 text-center">
          Quem é <span className="italic text-primary">Rodrigo</span>
        </h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-slide-in-left">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <p className="text-lg mb-6">
                  Nascido e criado no <strong>Nordeste brasileiro</strong>, trago em meu código a resiliência 
                  e criatividade da minha região. Como desenvolvedor web em formação, estou construindo uma base 
                  sólida em tecnologias modernas que permitem criar experiências digitais impactantes.
                </p>
                
                <p className="text-lg mb-6">
                  Atualmente foco meus estudos em JavaScript e TypeScript para aplicações web modernas. 
                  Busco constantemente aprender e aplicar as melhores práticas de desenvolvimento, 
                  combinando a tradição da minha terra com a inovação do mundo digital.
                </p>
                
                <p className="text-lg">
                  Minha jornada na programação começou pela curiosidade de entender como a tecnologia pode 
                  transformar realidades. Hoje, busco criar soluções que unam funcionalidade e beleza, 
                  assim como a cultura nordestina que tanto me inspira.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Profile Image */}
          <div className="animate-slide-in-right">
            <div className="relative mx-auto max-w-md">
              {/* Stylized border for the image */}
              <div className="absolute inset-0 border-2 border-nordeste-verdeMandacaru rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              
              <AspectRatio ratio={3/4} className="bg-nordeste-areia rounded-lg overflow-hidden shadow-xl">
                <div className="h-full w-full bg-gradient-to-br from-nordeste-azulCeu/30 to-nordeste-areia flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-nordeste-argila/20 flex items-center justify-center">
                      <span className="text-5xl font-playfair font-bold text-nordeste-argila">RS</span>
                    </div>
                    <p className="text-sm text-nordeste-argila/80 italic">
                      Placeholder para foto de perfil
                    </p>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
