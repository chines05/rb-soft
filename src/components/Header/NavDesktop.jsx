import { Link } from "react-scroll";

export default function NavDesktop() {
  return (
    <nav className="hidden md:flex items-center space-x-6 pr-10">
      <Link
        to="inicio"
        smooth={true}
        duration={500}
        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
      >
        Início
      </Link>
      <Link
        to="solucoes"
        smooth={true}
        duration={500}
        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
      >
        Soluções
      </Link>
      <Link
        to="sobre"
        smooth={true}
        duration={500}
        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
      >
        Sobre Nós
      </Link>
      <Link
        to="clientes"
        smooth={true}
        duration={500}
        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
      >
        Clientes
      </Link>
      <Link
        to="contato"
        smooth={true}
        duration={500}
        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
      >
        Contato
      </Link>
    </nav>
  );
}
