import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a className="hover:text-white transition">
        <FaFacebookF />
      </a>
      <a className="hover:text-white transition">
        <FaInstagram />
      </a>
      <a className="hover:text-white transition">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
