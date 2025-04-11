export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <span className="text-gray-400 hover:text-[#00ffc3] transition-colors duration-300 text-sm">
              {link.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
