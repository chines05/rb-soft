export default function SolutionCard({ icon, title, description, color }) {
  return (
    <div className="group h-full">
      <div className="h-full transition-all duration-500 ease-in-out group-hover:-translate-y-2">
        <div className="relative h-full min-h-[200px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl flex flex-col">
          {/* Topo com gradiente e ícone */}
          <div className={`bg-gradient-to-r ${color} p-8 text-center`}>
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-white/20 rounded-full backdrop-blur-sm">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          {/* Descrição com visual mais elegante */}
          <div className="flex-1 p-8 bg-gradient-to-b from-white via-white to-gray-50">
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* Borda neon no hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ffc3] rounded-xl pointer-events-none transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}
