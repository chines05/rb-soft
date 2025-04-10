import HeraSistemas from "../../assets/imgs/HeraSistemas.png";
import TorgeSistemas from "../../assets/imgs/TorgeSistemas.png";

const parceiros = [
  {
    img: HeraSistemas,
  },
  {
    img: TorgeSistemas,
  },
];

function ParceirasCard({ img }) {
  return (
    <div data-aos="zoom-in" className="h-60">
      <img
        src={img}
        className="w-full h-full rounded-full flex items-center justify-start border-black border-r-2 border-b-2"
      />
    </div>
  );
}

export default function ParceirasSection() {
  return (
    <section id="parcerias" className="py-20 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Parcerias</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos clientes apreciam a qualidade e eficiência das nossas
            soluções de automação comercial.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-15 items-center justify-center">
          {parceiros.map((parceria, index) => (
            <ParceirasCard key={index} {...parceria} />
          ))}
        </div>
      </div>
    </section>
  );
}
