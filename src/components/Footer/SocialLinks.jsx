import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://api.whatsapp.com/send?phone=554798828-8826&text=Olá!%0AEstou%20em%20busca%20de%20uma%20solução%20para%20automação%20comercial.%0AGostaria%20de%20saber%20mais%20sobre%20as%20opções%20disponíveis._blank"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#00ffc3] hover:text-gray-900 flex items-center justify-center text-white transition-colors duration-300"
      >
        <FaWhatsapp className="text-lg" />
      </a>
      <a
        href="https://www.instagram.com/rbsoft.ac/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#00ffc3] hover:text-gray-900 flex items-center justify-center text-white transition-colors duration-300"
      >
        <FaInstagram className="text-lg" />
      </a>
      <a
        href="https://www.linkedin.com/company/rbsoft"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#00ffc3] hover:text-gray-900 flex items-center justify-center text-white transition-colors duration-300"
      >
        <FaLinkedinIn className="text-lg" />
      </a>
      <a
        href="https://www.facebook.com/rbsoft.ac"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#00ffc3] hover:text-gray-900 flex items-center justify-center text-white transition-colors duration-300"
      >
        <FaFacebookF className="text-lg" />
      </a>
    </div>
  );
}
