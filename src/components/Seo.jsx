import { useEffect } from "react";

export const Seo = ({
  title = "RB Soft - Soluções em Automação Comercial",
  description = "Sistemas completos para gestão comercial, PDV inteligente e controle de estoque",
  keywords = "automação comercial, sistema PDV, gestão de estoque, RB Soft",
}) => {
  useEffect(() => {
    // Atualiza o título
    document.title = title;

    // Atualiza ou cria meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Atualiza ou cria meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Meta tags para redes sociais
    const metaOgTitle =
      document.querySelector('meta[property="og:title"]') ||
      document.createElement("meta");
    metaOgTitle.setAttribute("property", "og:title");
    metaOgTitle.content = title;
    document.head.appendChild(metaOgTitle);

    const metaOgDesc =
      document.querySelector('meta[property="og:description"]') ||
      document.createElement("meta");
    metaOgDesc.setAttribute("property", "og:description");
    metaOgDesc.content = description;
    document.head.appendChild(metaOgDesc);
  }, [title, description, keywords]);

  return null;
};
