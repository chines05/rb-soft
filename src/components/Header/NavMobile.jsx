import { Link } from "react-scroll";

export default function NavMobile({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed top-[70px] left-0 right-0 z-40">
      <div className="bg-[#2f239c] bg-opacity-95 backdrop-blur-sm px-6 py-6 flex flex-col space-y-4 shadow-lg rounded-b-2xl">
        {[
          { to: "inicio", label: "Início" },
          { to: "solucoes", label: "Soluções" },
          { to: "sobre", label: "Sobre Nós" },
          { to: "clientes", label: "Clientes" },
          { to: "parcerias", label: "Parcerias" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            className="text-white text-lg font-semibold hover:text-[#00ffc3] transition-colors cursor-pointer"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
