import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import SolutionsSection from "../components/Solutions/SolutionsSection";
import AboutSection from "../components/About/AboutSection";
import CTASection from "../components/CTA/CTASection";
import Footer from "../components/Footer/Footer";
import ClientesSection from "../components/Clientes/ClientesSection";
import ParceirasSection from "../components/Parcerias/ParceiriasSections";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
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
