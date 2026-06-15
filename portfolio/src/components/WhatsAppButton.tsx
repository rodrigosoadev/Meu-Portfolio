
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Substituir por número real do WhatsApp quando disponível
    const whatsappNumber = "5500000000000";
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 10px 30px -15px rgba(37, 211, 102, 0.3)",
            "0 10px 30px -15px rgba(37, 211, 102, 0.6)",
            "0 10px 30px -15px rgba(37, 211, 102, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="rounded-full bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-lg"
        >
          <motion.svg 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            stroke="currentColor" 
            fill="none" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </motion.svg>
          Fale Comigo
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
