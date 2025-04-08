import { handleWhatsAppClick } from "../../utils/handleWhatsAppClick";

export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className={`transition ${
                link.text === "Fale Conosco"
                  ? "text-[#25D366] hover:text-[#4aff74]"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={handleWhatsAppClick}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
