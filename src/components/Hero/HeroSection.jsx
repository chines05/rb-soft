import bgImageDesktop from "../../assets/imgs/BgImageDesktop.png";
import bgImageMobile from "../../assets/imgs/BgImageMobile.png";
import Button from "../ui/Button";
import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageDesktop}
          alt="Soluções de automação comercial"
          className="hidden sm:block w-full h-full object-cover"
        />
        <img
          src={bgImageMobile}
          alt="Soluções de automação comercial"
          className="sm:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Soluções de Automação{" "}
              <span className="text-[#00ffc3] whitespace-nowrap">RB SOFT</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
              Tecnologia robusta para otimizar sua operação comercial com
              eficiência e inteligência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-76"
              >
                Fale com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
