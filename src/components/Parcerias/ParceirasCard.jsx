import { FaExternalLinkAlt } from "react-icons/fa";

export default function ParceirasCard({
  img,
  name,
  desc,
  url,
  color = "from-[#2f239c] to-[#771bd6]",
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full max-w-md h-[28rem] flex flex-col"
    >
      {/* Card principal */}
      <div className="relative h-full w-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-8 transition-all duration-300 hover:shadow-xl border border-gray-100">
        {/* Container da logo com zoom destacado */}
        <div className="w-40 h-40 mb-8 flex items-center justify-center">
          <img
            src={img}
            alt={name}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-150" // Zoom de 50%
          />
        </div>

        {/* Conteúdo textual */}
        <div className="flex-grow flex flex-col items-center text-center px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
          <p className="text-gray-600 mb-8 line-clamp-3 text-lg leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Botão */}
        <div className="w-full mt-auto">
          <div
            className={`bg-gradient-to-r ${color} text-white text-sm font-medium px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-md hover:brightness-110 mx-auto max-w-xs w-full`}
          >
            Visitar site
            <FaExternalLinkAlt className="ml-2 w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Efeito de profundidade sutil */}
      <div className="absolute inset-0 rounded-3xl shadow-sm border border-gray-200 transform rotate-1 -z-10 transition-transform duration-500 group-hover:rotate-0"></div>
    </a>
  );
}
