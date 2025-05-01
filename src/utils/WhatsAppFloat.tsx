import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsAppClick } from "./handleWhatsAppClick";

export function WhatsAppFloat() {
  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors p-0 cursor-pointer animate-bounce"
      style={{ animationDuration: "2s" }}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </div>
  );
}
