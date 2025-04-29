import { Link } from "react-scroll";

export default function NavDesktop() {
  const links = [
    { to: "inicio", label: "Início" },
    { to: "solucoes", label: "Soluções" },
    { to: "sobre", label: "Sobre Nós" },
    { to: "depoimentos", label: "Depoimentos" },
    { to: "parcerias", label: "Parcerias" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer relative px-4 py-2 text-sm lg:text-base font-medium text-white hover:text-[#00ffc3] transition-colors duration-200"
        >
          {label}
          <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-[#00ffc3] transition-all duration-300 -translate-x-1/2 group-hover:w-3/4" />
        </Link>
      ))}
    </nav>
  );
}
