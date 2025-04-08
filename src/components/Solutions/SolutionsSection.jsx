import SolutionCard from "./SolutionCard";
import { Calculator, CalendarCheck2, Database } from "lucide-react";

const solutions = [
  {
    icon: <Calculator />,
    title: "PDV Inteligente",
    description:
      "Sistema de ponto de venda completo com gestão de estoque, relatórios e integração com e-commerce.",
  },
  {
    icon: <CalendarCheck2 />,
    title: "Gestão de Inventário",
    description:
      "Controle seu estoque em tempo real, com alertas de reposição e análise de giro de produtos.",
  },
  {
    icon: <Database />,
    title: "Análise de Dados",
    description:
      "Dashboards personalizados com insights valiosos para tomada de decisões estratégicas.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de soluções de automação comercial para
            atender às necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
