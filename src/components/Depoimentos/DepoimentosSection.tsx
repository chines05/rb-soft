import React, { useState } from "react";
import MulherNoVideo from "../../assets/videos/mulherNoVideo.mp4";
import MulherFalandoVideo from "../../assets/videos/mulherFalando.mp4";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import VideoModal from "./VideoModal";

export default function DepoimentosSection() {
  const [selectedVideo, setSelectedVideo] = useState<{
    video: string;
    name: string;
    role: string;
    quote: string[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const testimonials = [
    {
      video: MulherNoVideo,
      name: "Yasmin",
      role: "Proprietária - Loja Yas Store",
      quote: [
        "✔ Sistema fácil de usar e intuitivo",
        "✔ Controle de estoque eficiente",
        "✔ Suporte atento e especializado",
        "✔ Treinamentos e suporte flexíveis",
        "✔ Solução personalizada para seu negócio",
      ],
    },
    {
      video: MulherFalandoVideo,
      name: "Evelyn",
      role: "Gerente - Atacado Chique, Moda Íntima",
      quote: [
        "✔ Rápido, prático e acessível",
        "✔ Controle financeiro integrado",
        "✔ PDV inteligente e completo",
        "✔ Relatórios detalhados e customizáveis",
        "✔ Cadastro de clientes e produtos",
      ],
    },
  ];

  const openModal = (videoIndex) => {
    setSelectedVideo(testimonials[videoIndex]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="depoimentos"
      className="relative py-20 bg-gradient-to-b from-[#f8fafc] to-white"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-5 mb-4 text-xs font-semibold tracking-wider text-[#2f239c] bg-[#2f239c]/10 rounded-full uppercase">
            Depoimentos em Vídeo
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos clientes <span className="text-[#771bd6]">recomendam</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#771bd6] to-[#00ffc3] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Assista aos depoimentos reais de quem já transformou seu negócio com
            nossas soluções
          </p>
        </div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => openModal(index)}
              data-aos="fade-left"
            >
              <div className="relative aspect-video">
                <video
                  src={testimonial.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-[#771bd6] transition-all">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#2f239c] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#2f239c] font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {testimonial.quote.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#00ffc3] mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <VideoModal video={selectedVideo} onClose={closeModal} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
