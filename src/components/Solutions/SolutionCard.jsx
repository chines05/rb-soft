export default function SolutionCard({ icon, title, description, color }) {
  return (
    <div className="group h-full">
      <div className="h-full transition-all duration-500 ease-in-out group-hover:-translate-y-2">
        <div className="relative h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl">
          <div className={`bg-gradient-to-r ${color} p-8 text-center`}>
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-white/20 rounded-full backdrop-blur-sm">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          <div className="p-8">
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="mt-auto">
              <button className="w-full py-3 px-6 bg-gradient-to-r from-[#2f239c] to-[#771bd6] text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                <span>Saiba mais</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00ffc3] rounded-xl pointer-events-none transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}
