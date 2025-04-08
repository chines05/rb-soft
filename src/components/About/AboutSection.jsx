import aboutImage from "../../assets/imgs/logoRbSoft.png";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre a AutoTech</h2>
            <p className="text-muted-foreground mb-6">
              Há mais de 10 anos no mercado, a AutoTech é especialista em
              soluções de automação comercial para empresas de todos os portes.
              Nossa missão é simplificar processos e aumentar a eficiência dos
              negócios através da tecnologia.
            </p>
            <p className="text-muted-foreground mb-6">
              Com uma equipe de especialistas em tecnologia e negócios,
              desenvolvemos soluções personalizadas que atendem às necessidades
              específicas de cada cliente, garantindo resultados reais e
              mensuráveis.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">
                  Clientes Atendidos
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
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
          <div className="relative h-[400px] rounded-lg overflow-hidden">
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
