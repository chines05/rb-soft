import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import SolutionsSection from "../components/Solutions/SolutionsSection";
import AboutSection from "../components/About/AboutSection";
import CTASection from "../components/CTA/CTASection";
import Footer from "../components/Footer/Footer";
import ParceirasSection from "../components/Parcerias/ParceiriasSections";
import { Seo } from "../components/Seo";
import { SchemaMarkup } from "../components/SchemaMarkup";
import DepoimentosSection from "../components/Depoimentos/DepoimentosSection";
import { WhatsAppFloat } from "../utils/WhatsAppFloat";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <SchemaMarkup />
      <Seo
        title="RB Soft - Automação Comercial Completa"
        description="Solução completa para PDV, estoque e gestão comercial com tecnologia inteligente"
        keywords="automação comercial, sistema PDV, gestão de estoque, RB Soft, rb soft, varejo digital, sistema de gestão"
      />
      <Header />
      <main className="bg-[#dceaf4]">
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <DepoimentosSection />
        <ParceirasSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
