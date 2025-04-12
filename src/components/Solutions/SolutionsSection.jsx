import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SolutionCard from "./SolutionCard";
import {
  FaCashRegister,
  FaBoxes,
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
  FaSync,
} from "react-icons/fa";

const solutions = [
  {
    icon: <FaCashRegister className="text-4xl" />,
    title: "PDV Inteligente",
    description:
      "Sistema completo para gestão de vendas com integração em tempo real e relatórios detalhados.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <FaBoxes className="text-4xl" />,
    title: "Gestão de Estoque",
    description:
      "Controle preciso com alertas automáticos, inventário cíclico e rastreamento de lotes/séries para máxima eficiência.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Business Intelligence",
    description:
      "Dashboards interativos com os principais KPIs do seu negócio para tomada de decisão baseada em dados.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: <FaMobileAlt className="text-4xl" />,
    title: "Aplicativo Mobile",
    description:
      "Acesse seu sistema de qualquer lugar, gerencie vendas, estoque e equipe diretamente do seu celular.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Segurança Avançada",
    description:
      "Proteção de dados com backup automatizado, criptografia e controle de acesso multinível.",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: <FaSync className="text-4xl" />,
    title: "Integrações",
    description:
      "Conecte com marketplaces, ERPs, contabilidade eletrônica e outros sistemas essenciais.",
    color: "from-indigo-500 to-violet-600",
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="relative py-10 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-semibold text-[#2f239c] bg-[#2f239c]/10 rounded-full">
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tecnologia que transforma seu negócio
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#771bd6] to-[#00ffc3] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sistemas completos desenvolvidos para otimizar cada aspecto da sua
            operação comercial.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={index}>
                <SolutionCard {...solution} />
              </SwiperSlide>
            ))}

            <div className="swiper-pagination !bottom-0 mt-8"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
