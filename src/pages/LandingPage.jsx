import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import SolutionsSection from "../components/Solutions/SolutionsSection";
import AboutSection from "../components/About/AboutSection";
import CTASection from "../components/CTA/CTASection";
import Footer from "../components/Footer/Footer";
import ClientesSection from "../components/Clientes/ClientesSection";
import ParceirasSection from "../components/Parcerias/ParceiriasSections";

// TODO: #771bd6, #dceaf4, #3e84a5, #2f239cda, #6cafcf

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="bg-[#dceaf4]">
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <ClientesSection />
        <ParceirasSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
