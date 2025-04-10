import aboutImage from "../../assets/imgs/WhatsApp Image 2025-04-10 at 20.12.17.jpeg";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-extrabold mb-4">
              Sobre a Rb Soft Informática
            </h2>
            <p className="text-muted-foreground mb-6">
              A RB SOFT Informática nasceu da realização de um sonho. Em 2016,
              após um ciclo encerrado em uma antiga empresa, surgiu a
              oportunidade de transformar paixão em propósito. Desde então, toda
              a dedicação e energia foram direcionadas para a construção deste
              projeto.
            </p>
            <p className="text-muted-foreground mb-6">
              Hoje, a RB SOFT é uma empresa sólida e respeitada no mercado
              acriano, com mais de 100 clientes ativos em sua carteira. Nossa
              missão é simplificar e otimizar a rotina das empresas do nosso
              estado, oferecendo soluções em software de gestão com qualidade,
              eficiência e um atendimento personalizado às necessidades de cada
              cliente.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Clientes Ativos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">9+</p>
                <p className="text-sm text-muted-foreground">
                  Anos de Experiência
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Equipe AutoTech"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
