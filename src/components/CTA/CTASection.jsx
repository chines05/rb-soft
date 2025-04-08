import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para transformar seu negócio?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Entre em contato conosco hoje mesmo e descubra como nossas soluções de
          automação podem impulsionar seu negócio.
        </p>
        <Button size="lg" variant="secondary">
          Solicitar Demonstração
        </Button>
      </div>
    </section>
  );
}
