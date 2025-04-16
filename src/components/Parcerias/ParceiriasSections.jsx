import ParceirasCard from "./ParceirasCard";
import HeraSistemas from "../../assets/imgs/HeraSistemas.png";
import TorgeSistemas from "../../assets/imgs/TorgeSistemas.png";

const parceiros = [
  {
    img: HeraSistemas,
    name: "Hera Sistemas",
    desc: "Especialista em soluções ERP corporativas",
    url: "https://www.herasistemas.com",
    color: "from-blue-600 to-blue-800",
  },
  {
    img: TorgeSistemas,
    name: "Torge Sistemas",
    desc: "Líder em automação comercial para varejo",
    url: "https://www.torge.com.br/",
    color: "from-purple-600 to-purple-800",
  },
];

export default function ParceirasSection() {
  return (
    <section
      id="parcerias"
      className="relative py-10 bg-gradient-to-b from-white to-[#f8fafc]"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-[#2f239c] bg-[#2f239c]/10 rounded-full">
            PARCEIROS ESTRATÉGICOS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Principais Parceiros
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#771bd6] to-[#00ffc3] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Colaborações que elevam a qualidade das nossas soluções
          </p>
        </div>

        {/* Grid especial para 2 parceiros */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {parceiros.map((parceiro, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex justify-center"
            >
              <ParceirasCard {...parceiro} />
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-gray-500 text-sm">
            Parcerias certificadas e homologadas pela RB Soft
          </p>
        </div>
      </div>
    </section>
  );
}
