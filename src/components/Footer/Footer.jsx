import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import Logo from "../../assets/imgs/IconeRbSoft.png";
import Button from "../ui/Button";
import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Logo e sobre */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={Logo}
                alt="RB Soft Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div className="flex items-center gap-1">
                <h1 className="text-3xl font-extrabold text-white">RB</h1>
                <h1 className="text-3xl font-extrabold text-[#00ffc3]">SOFT</h1>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Soluções completas em automação comercial para impulsionar seu
              negócio.
            </p>

            <div className="mb-6">
              <Button
                size="sm"
                variant="whatsapp"
                onClick={handleWhatsAppClick}
                className=" sm:w-auto bg-[#00ffc3] hover:bg-[#00e6b3] text-gray-900"
              >
                Fale Conosco
              </Button>
            </div>

            <SocialLinks />
          </div>

          <FooterLinks
            title="Soluções"
            links={[
              { text: "PDV Inteligente" },
              { text: "Gestão de Estoque" },
              { text: "Business Intelligence" },
              { text: "Aplicativo Mobile" },
            ]}
          />

          <FooterLinks
            title="Empresa"
            links={[
              { text: "Sobre Nós" },
              { text: "Clientes" },
              { text: "Parceiros" },
              { text: "Trabalhe Conosco" },
            ]}
          />

          <FooterLinks
            title="Suporte"
            links={[
              { text: "Central de Ajuda" },
              { text: "Documentação" },
              { text: "Atendimento" },
              { text: "Status" },
            ]}
          />
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RB Soft. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <span className="text-gray-500 hover:text-[#00ffc3] text-sm transition-colors">
              Termos de Serviço
            </span>
            <span className="text-gray-500 hover:text-[#00ffc3] text-sm transition-colors">
              Política de Privacidade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
