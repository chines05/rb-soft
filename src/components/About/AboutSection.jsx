import aboutImage from "../../assets/imgs/WhatsApp Image 2025-04-10 at 20.12.17.jpeg";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative z-0 py-10 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo textual */}
          <div data-aos="fade-right" className="lg:pr-12">
            <div className="inline-block py-1.5 px-4 mb-6 text-sm font-semibold text-[#2f239c] bg-[#2f239c]/10 rounded-full">
              NOSSA HISTÓRIA
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando sonhos em{" "}
              <span className="text-[#771bd6]">soluções digitais</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p>
                A RB SOFT Informática nasceu em 2016 da coragem de transformar
                uma paixão por tecnologia em um propósito maior. O que começou
                como um sonho tornou-se referência em automação comercial no
                Acre.
              </p>

              <p>
                Nossa jornada foi construída com perseverança e dedicação,
                superando desafios para entregar sistemas que realmente fazem a
                diferença na vida dos nossos clientes.
              </p>

              <p className="font-medium text-gray-800">
                Hoje, orgulhamo-nos de ter mais de 200 empresas que confiam em
                nossas soluções para operar com eficiência e crescimento
                sustentável.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "200+", label: "Clientes Ativos" },
                { value: "9+", label: "Anos no Mercado" },
                { value: "98%", label: "Satisfação" },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-3xl font-bold text-[#771bd6] mb-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div
            data-aos="fade-left"
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutImage}
              alt="Equipe RB Soft"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay e efeito */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f239c]/70 to-[#771bd6]/50"></div>

            {/* Destaque na imagem */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nossa Missão
              </h3>
              <p className="text-gray-700">
                Simplificar a gestão empresarial através de tecnologia inovadora
                e atendimento humanizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
