import { Star } from "lucide-react";

export default function ClientesCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-start mb-4">
        {icon}
        <div className="flex ml-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
          <Star className="w-5 h-5 text-yellow-500" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
    </div>
  );
}
