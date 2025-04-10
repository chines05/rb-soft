import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a className="hover:text-white transition" target="_blank">
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/rbsoft.ac/"
        target="_blank"
        className="hover:text-white transition"
      >
        <FaInstagram />
      </a>
      <a className="hover:text-white transition" target="_blank">
        <FaLinkedinIn />
      </a>
    </div>
  );
}
