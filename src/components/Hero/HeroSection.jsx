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
        <div className="absolute bg-black opacity-10 inset-0 z-0" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="container mx-auto px-6 flex-1 flex items-center">
          <div className="max-w-2xl w-full py-12">
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mt-10 mb-6 leading-tight"
              data-aos="fade-up"
            >
              <span className="text-[#00ffc3]">Solução completa</span> <br />{" "}
              para seu <br />
              <span className="text-white">varejo digital</span>
            </h1>

            <p
              className="text-xl text-white/90 mb-8 max-w-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Tudo o que você precisa para <strong>vender mais</strong>,
              <strong> controlar melhor</strong> e{" "}
              <strong>crescer rápido </strong>
              em uma única plataforma.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {[
                "PDV com tecnologia ágil",
                "Controle de estoque preciso",
                "Integração com e-commerce",
                "Relatórios em tempo real",
                "Suporte especializado",
                "Crescimento escalável",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  <div className="w-2 h-2 bg-[#00ffc3] rounded-full mr-3"></div>
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 hover:scale-[1.02] transition-transform"
              >
                Quero conhecer o sistema
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-8 flex justify-center w-full relative z-20">
          <button
            onClick={() =>
              document
                .getElementById("solucoes")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="animate-bounce focus:outline-none cursor-pointer"
            aria-label="Ir para soluções"
          >
            <svg
              className="w-8 h-8 text-white hover:text-[#00ffc3] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
