import { FaStar } from "react-icons/fa";

export default function ClientesCard({
  image,
  name,
  role,
  testimonial,
  rating,
}) {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
        {/* Cabeçalho simplificado - apenas avatar */}
        <div className="bg-gradient-to-r from-[#2f239c] to-[#771bd6] flex items-center justify-center py-8 flex-shrink-0">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 border-4 border-white rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-white/90 text-sm mt-1">{role}</p>
          </div>
        </div>

        {/* Depoimento */}
        <div className="p-6 flex flex-col" style={{ height: "200px" }}>
          <div className="flex mb-3 justify-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 mx-0.5 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <blockquote
            className="text-gray-600 italic text-sm mb-4 text-center overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            "{testimonial}"
          </blockquote>

          <div className="mt-auto pt-3 border-t border-gray-100">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#771bd6] to-transparent mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
