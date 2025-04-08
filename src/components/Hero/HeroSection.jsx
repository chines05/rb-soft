import heroBg from "../../assets/imgs/logoRbSoft.png";
import Button from "../ui/Button";

import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full mt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Automação Comercial"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Soluções de Automação para seu Negócio
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Transforme sua operação comercial com nossas soluções inteligentes
            de automação. Aumente a eficiência e reduza custos.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-[100%] gap-4">
            <Button size="lg" className="font-medium">
              Conheça Nossas Soluções
            </Button>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick}>
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
