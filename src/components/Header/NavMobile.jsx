import { Link } from "react-scroll";
import Button from "../ui/Button";

export default function NavMobile({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-white z-40 mt-16">
      <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
        <Link
          to="inicio"
          smooth={true}
          duration={500}
          className="text-lg font-medium hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Início
        </Link>
        <Link
          to="solucoes"
          smooth={true}
          duration={500}
          className="text-lg font-medium hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Soluções
        </Link>
        <Link
          to="sobre"
          smooth={true}
          duration={500}
          className="text-lg font-medium hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Sobre Nós
        </Link>
        <Link
          to="clientes"
          smooth={true}
          duration={500}
          className="text-lg font-medium hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Clientes
        </Link>
        <Link
          to="contato"
          smooth={true}
          duration={500}
          className="text-lg font-medium hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Contato
        </Link>
        <Button size="lg" className="w-full mt-4">
          Demonstração
        </Button>
      </div>
    </div>
  );
}
