import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ClientesCard from "./ClientesCard";

const clientes = [
  {
    image: "src/assets/imgs/IconeRbSoft.png",
    name: "Chines Porto",
    role: "Diretor Comercial - Porto Madeiras",
    testimonial:
      "A RB Soft revolucionou nossa gestão. O sistema é intuitivo e o suporte é excepcional. Ganhamos 40% em produtividade!",
    rating: 5,
  },
  {
    image: "src/assets/imgs/IconeRbSoft.png",
    name: "Weder Santos",
    role: "Gerente - Supermercados Santos",
    testimonial:
      "Implantamos em todas nossas filiais. Controle de estoque em tempo real foi um divisor de águas para nosso negócio.",
    rating: 5,
  },
  {
    image: "src/assets/imgs/IconeRbSoft.png",
    name: "Gabriel Martins",
    role: "CEO - Posto Combustíveis",
    testimonial:
      "Sistema completo que atende todas nossas necessidades. A equipe da RB Soft é parceira em nosso crescimento.",
    rating: 5,
  },
];

export default function ClientesSection() {
  return (
    <section
      id="clientes"
      className="relative py-10 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-semibold text-[#2f239c] bg-[#2f239c]/10 rounded-full">
            DEPOIMENTOS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#771bd6] to-[#00ffc3] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nosso maior orgulho. Conheça
            histórias de quem já transformou seu negócio com nossas soluções.
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
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {clientes.map((cliente, index) => (
              <SwiperSlide key={index}>
                <ClientesCard {...cliente} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
