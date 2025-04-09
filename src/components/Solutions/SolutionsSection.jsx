import SolutionCard from "./SolutionCard";
import { Calculator, CalendarCheck2, Database } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const solutions = [
  {
    icon: <Calculator />,
    title: "PDV Inteligente",
    description:
      "Sistema de ponto de venda completo com gestão de estoque, relatórios e integração com e-commerce.",
  },
  {
    icon: <CalendarCheck2 />,
    title: "Gestão de Inventário",
    description:
      "Sistema de ponto de venda completo com gestão de estoque, relatórios e integração com e-commerce.",
  },
  {
    icon: <Database />,
    title: "Análise de Dados",
    description:
      "Sistema de ponto de venda completo com gestão de estoque, relatórios e integração com e-commerce.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="py-20 bg-gray-50">
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

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
