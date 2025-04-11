import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2f239c] to-[#771bd6] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Fale com nossos especialistas e descubra a solução perfeita para
            você.
          </p>

          <Button
            size="lg"
            variant="whatsapp"
            onClick={handleWhatsAppClick}
            className="mx-auto"
          >
            Falar com Especialista
          </Button>

          <p className="text-sm mt-8 opacity-80">
            Atendimento rápido e especializado
          </p>
        </div>
      </div>
    </section>
  );
}
