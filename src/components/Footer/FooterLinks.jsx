export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-white transition">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
