import { Link } from "react-router-dom";

export default function SolutionCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link to="#" className="text-primary font-medium hover:underline">
        Saiba mais →
      </Link>
    </div>
  );
}
