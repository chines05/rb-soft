import SolutionCard from "./SolutionCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaCalculator, FaCalendar, FaDatabase } from "react-icons/fa";

const solutions = [
  {
    icon: <FaCalculator />,
    title: "PDV Inteligente",
    description:
      "Otimize suas vendas com um ponto de venda moderno, rápido, integrado e fácil de usar todos os dias.",
  },
  {
    icon: <FaCalendar />,
    title: "Gestão de Estoque",
    description:
      "Controle seu estoque em tempo real, evitando perdas, excessos e garantindo reposições sempre eficientes.",
  },
  {
    icon: <FaDatabase />,
    title: "Relatórios Gerenciais",
    description:
      "Tome decisões mais estratégicas com relatórios automáticos, claros, detalhados e sempre atualizados em tempo.",
  },
];

export default function SolutionsSection() {
  return (
    <section data-aos="zoom-out-up" id="solucoes" className="py-30">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de soluções de automação comercial para
            atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {solutions.map((solution, index) => (
            <SwiperSlide key={index}>
              <SolutionCard {...solution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
