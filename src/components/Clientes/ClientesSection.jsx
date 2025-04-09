import { RxAvatar } from "react-icons/rx";
import ClientesCard from "./ClientesCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const clientes = [
  {
    icon: <RxAvatar className="w-12 h-12" />,
    title: "Chines Porto",
    description:
      "Empresa super companheira, me atendeu direitinho, super gentes boaas, super atenciosas",
  },
  {
    icon: <RxAvatar className="w-12 h-12" />,
    title: "Jug Santos",
    description:
      "A empresa super companheira, me atendeu direitinho, super gentes boaas, super atenciosas",
  },
  {
    icon: <RxAvatar className="w-12 h-12" />,
    title: "Weder Santos",
    description:
      "A empresa super companheira, me atendeu direitinho, super gentes boaas, super atenciosas",
  },
  {
    icon: <RxAvatar className="w-12 h-12" />,
    title: "Chines Porto",
    description:
      "Empresa super companheira, me atendeu direitinho, super gentes boaas, super atenciosas",
  },
  {
    icon: <RxAvatar className="w-12 h-12" />,
    title: "Jug Santos",
    description:
      "A empresa super companheira, me atendeu direitinho, super gentes boaas, super atenciosas",
  },
  {
    icon: <RxAvatar className="w-12 h-12" />,
    title: "Weder Santos",
    description:
      "A empresa super companheira, me atendeu direitinho, super gentes boaas, super atenciosas",
  },
];

export default function ClientesSection() {
  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Clientes Satisfeitos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos clientes apreciam a qualidade e eficiência das nossas
            soluções de automação comercial.
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
          {clientes.map((solution, index) => (
            <SwiperSlide key={index}>
              <ClientesCard {...solution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
