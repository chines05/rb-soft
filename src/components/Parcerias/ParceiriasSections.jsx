import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ParceirasCard from "./ParceirasCard";

import HeraSistemas from "../../assets/imgs/HeraSistemas.jpeg";
import TorgeSistemas from "../../assets/imgs/TorgeSistemas.jpeg";

const parceiros = [
  {
    img: HeraSistemas,
  },
  {
    img: TorgeSistemas,
  },
  {
    img: TorgeSistemas,
  },
];

export default function ParceirasSection() {
  return (
    <section id="clientes" className="py-10 ">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Parcerias</h2>
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
          {parceiros.map((parceria, index) => (
            <SwiperSlide key={index}>
              <ParceirasCard {...parceria} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
