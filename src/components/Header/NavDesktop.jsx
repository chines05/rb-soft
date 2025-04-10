import { Link } from "react-scroll";
import Button from "../ui/Button";
import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function NavDesktop() {
  const links = [
    { to: "inicio", label: "Início" },
    { to: "solucoes", label: "Soluções" },
    { to: "sobre", label: "Sobre Nós" },
    { to: "clientes", label: "Clientes" },
    { to: "parcerias", label: "Parcerias" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6 pr-5 md:pr-0">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          className="group relative text-md font-medium cursor-pointer transition-colors duration-300 text-white hover:text-[#00ffc3]"
        >
          {label}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00ffc3] transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
      <div className="group relative hidden lg:block ml-4">
        {" "}
        {/* Container com group */}
        <Button
          size="sm"
          onClick={handleWhatsAppClick}
          className="text-white hover:text-[#00ffc3] transition-colors bg-transparent hover:bg-transparent p-0"
        >
          Fale Conosco
        </Button>
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00ffc3] transition-all duration-300 group-hover:w-full" />
      </div>
    </nav>
  );
}
