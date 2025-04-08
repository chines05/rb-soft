import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import Logo from "../../assets/imgs/logoRbSoft.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src={Logo}
                alt="AutoTech Logo"
                width={40}
                height={40}
                className="mr-2 bg-white rounded"
              />
              <span className="font-bold text-xl text-white">AutoTech</span>
            </div>
            <p className="text-sm opacity-75 mb-4">
              Soluções inteligentes de automação comercial para impulsionar seu
              negócio.
            </p>
            <SocialLinks />
          </div>

          <FooterLinks
            title="Soluções"
            links={[
              { text: "PDV Inteligente" },
              { text: "Gestão de Inventário" },
              { text: "Relatórios Automatizados" },
              { text: "Integração com Sistemas" },
            ]}
          />

          <FooterLinks
            title="Empresa"
            links={[
              { text: "Sobre Nós" },
              { text: "Carreiras" },
              { text: "Blog" },
              { text: "Parceiros" },
            ]}
          />

          <FooterLinks title="Suporte" links={[{ text: "Fale Conosco" }]} />
        </div>
      </div>
    </footer>
  );
}
