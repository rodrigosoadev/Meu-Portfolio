import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-nordeste-argila text-white pt-16 pb-8 mt-12">
      {/* Onda decorativa no topo */}
      <svg
        className="absolute -top-px left-0 w-full h-12 text-nordeste-argila"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,60 L0,60 Z"
          transform="translate(0,-30)"
        />
      </svg>

      {/* Azulejo padrão sutil */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-semibold italic">
              Rodrigo Soares
            </h3>
            <p className="text-sm mt-1 opacity-80 font-mono tracking-wider uppercase text-[11px]">
              Desenvolvedor Web · Nordeste Brasileiro
            </p>
          </div>

          <div className="text-sm opacity-80 text-center md:text-right">
            <p>© {new Date().getFullYear()} — Todos os direitos reservados</p>
            <p className="mt-1">Feito com 🌵 no Nordeste</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
