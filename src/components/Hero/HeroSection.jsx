import bgImageDesktop from "../../assets/imgs/BgImageDesktop.png";
import bgImageMobile from "../../assets/imgs/BgImageMobile.png";
import Button from "../ui/Button";

import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageDesktop}
          alt="Automação Comercial"
          className="object-cover w-full h-screen hidden sm:block"
        />
        <img
          src={bgImageMobile}
          alt="Automação Comercial"
          className="object-cover w-full h-screen sm:hidden"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 container mx-auto px-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Soluções de Automação para seu Negócio
          </h1>
          <p
            data-aos="fade-right"
            className="text-lg md:text-xl opacity-90 mb-8"
          >
            Transforme sua operação comercial com nossas soluções inteligentes
            de automação. Aumente a eficiência e reduza custos.
          </p>
          <div
            data-aos="fade-right"
            className="flex flex-col md:flex-row items-center justify-start w-[100%] gap-4"
          >
            <h1>Conheça Nossas Soluções</h1>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick}>
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
