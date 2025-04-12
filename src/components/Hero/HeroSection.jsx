import bgImageDesktop from "../../assets/imgs/BgImageDesktop.png";
import bgImageMobile from "../../assets/imgs/BgImageMobile.png";
import Button from "../ui/Button";
import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageDesktop}
          alt="Sistema RB Soft em operação"
          className="hidden sm:block w-full h-full object-cover object-center"
        />
        <img
          src={bgImageMobile}
          alt="Sistema RB Soft mobile"
          className="sm:hidden w-full h-full object-cover object-center"
        />
        <div className="absolute bg-black opacity-20 inset-0 z-0" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24">
        {" "}
        <div className="container mx-auto px-6 flex-1 flex items-center">
          {" "}
          <div className="max-w-2xl w-full">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight">
              <span className="text-[#00ffc3]">Solução completa</span> para
              <br />
              seu <span className="text-white">varejo digital</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Tudo o que você precisa para <strong>vender mais</strong>,
              <strong> controlar melhor</strong> e{" "}
              <strong>crescer rápido</strong>
              em uma única plataforma.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "PDV com tecnologia ágil",
                "Controle de estoque preciso",
                "Integração com e-commerce",
                "Relatórios em tempo real",
                "Suporte especializado",
                "Crescimento escalável",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#00ffc3] rounded-full mr-3"></div>
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 hover:scale-[1.02] transition-transform"
              >
                Quero conhecer o sistema
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 text-white border-white hover:bg-white/10"
                onClick={() =>
                  document
                    .getElementById("solucoes")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver demonstração
              </Button>
            </div>
          </div>
        </div>
        <div className="pb-8 flex justify-center w-full">
          <button
            onClick={() =>
              document
                .getElementById("solucoes")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce focus:outline-none"
            aria-label="Ir para soluções"
          >
            <svg
              className="w-6 h-6 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
