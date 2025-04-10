import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <span
              className={`transition ${
                link.text === "Fale Conosco"
                  ? "text-[#25D366] hover:text-[#4aff74] cursor-pointer"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => {
                if (link.text === "Fale Conosco") {
                  handleWhatsAppClick();
                }
              }}
            >
              {link.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
