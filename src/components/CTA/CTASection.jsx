import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-10 bg-primary text-black">
      <div className="container mx-auto px-4 text-center flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para transformar seu negócio?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Entre em contato conosco hoje mesmo e descubra como nossas soluções de
          automação podem impulsionar seu negócio.
        </p>
        <Button
          data-aos="fade-right"
          size="lg"
          variant="whatsapp"
          onClick={handleWhatsAppClick}
        >
          Automatize seu Negócio
        </Button>
      </div>
    </section>
  );
}
