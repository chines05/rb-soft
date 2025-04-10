import { Link } from "react-scroll";

export default function NavDesktop() {
  const links = [
    { to: "inicio", label: "Início" },
    { to: "solucoes", label: "Soluções" },
    { to: "sobre", label: "Sobre Nós" },
    { to: "clientes", label: "Clientes" },
    { to: "parcerias", label: "Parcerias" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6 pr-5 text-white">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          className="group relative text-md font-medium cursor-pointer transition-colors duration-300"
        >
          {label}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00ffc3] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}
