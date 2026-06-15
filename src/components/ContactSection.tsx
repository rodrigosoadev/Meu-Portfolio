
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import SectionLabel from "./SectionLabel";

const ContactSection = () => {
  const handleContactClick = (type: string) => {
    let url = "";
    
    switch (type) {
      case "whatsapp":
        url = "https://wa.me/5500000000000";
        break;
      case "github":
        url = "https://github.com";
        break;
      case "linkedin":
        url = "https://linkedin.com";
        break;
      default:
        break;
    }
    
    if (url) window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionLabel number="04" label="Contato" />
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-12 text-center">
          Vamos <span className="italic text-primary">conversar</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden bg-nordeste-branco animate-fade-in-up">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Info */}
                <div className="p-8 bg-nordeste-areia">
                  <h3 className="text-2xl font-bold text-nordeste-argila mb-6 font-playfair">
                    Vamos Conversar
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Estou disponível para projetos, colaborações ou simplesmente trocar ideias sobre desenvolvimento web. 
                    Entre em contato através dos canais abaixo:
                  </p>
                  
                  <div className="space-y-4">
                    <SocialButton 
                      icon={
                        <div className="w-6 h-6 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                          </svg>
                        </div>
                      } 
                      label="WhatsApp" 
                      color="#25D366"
                      onClick={() => handleContactClick("whatsapp")}
                      primary
                    />
                    <SocialButton 
                      icon={<Github className="w-6 h-6" />} 
                      label="GitHub" 
                      color="#333"
                      onClick={() => handleContactClick("github")}
                    />
                    <SocialButton 
                      icon={<Linkedin className="w-6 h-6" />} 
                      label="LinkedIn" 
                      color="#0077B5"
                      onClick={() => handleContactClick("linkedin")}
                    />
                  </div>
                </div>
                
                {/* Decorative Image */}
                <div className="bg-gradient-to-br from-nordeste-verdeMandacaru/30 to-nordeste-azulCeu/30 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 8V13C16 14.0609 16.4214 15.0783 17.1716 15.8284C17.9217 16.5786 18.9391 17 20 17C21.0609 17 22.0783 16.5786 22.8284 15.8284C23.5786 15.0783 24 14.0609 24 13V12C24 9.34784 22.9464 6.8043 21.0711 4.92893C19.1957 3.05357 16.6522 2 14 2H10C7.34784 2 4.8043 3.05357 2.92893 4.92893C1.05357 6.8043 0 9.34784 0 12C0 14.6522 1.05357 17.1957 2.92893 19.0711C4.8043 20.9464 7.34784 22 10 22H12" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-playfair font-bold text-nordeste-argila mb-2">Vamos trabalhar juntos!</h4>
                    <p className="text-gray-700">Transformando ideias em código com o toque nordestino.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

type SocialButtonProps = {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
  primary?: boolean;
};

const SocialButton = ({ icon, label, color, onClick, primary = false }: SocialButtonProps) => {
  if (primary) {
    return (
      <Button
        onClick={onClick}
        className="w-full bg-nordeste-verdeMandacaru hover:bg-nordeste-verdeMandacaru/90 text-white py-6 hover-scale"
      >
        <div className="flex items-center justify-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
      </Button>
    );
  }
  
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full border-gray-300 hover:border-gray-400 text-gray-800 py-6 hover-scale"
      style={{ 
        "--hover-color": color
      } as React.CSSProperties}
    >
      <div className="flex items-center justify-center gap-3">
        <span style={{ color }}>{icon}</span>
        <span>{label}</span>
      </div>
    </Button>
  );
};

export default ContactSection;
