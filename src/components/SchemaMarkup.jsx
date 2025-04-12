export const SchemaMarkup = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RB Soft",
      url: "https://rbsoft-informatica.com.br",
      logo: "../../assets/imgs/IconeRbSoft.png",
      description: "Soluções em automação comercial",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55 47 98828-8826",
        contactType: "sales",
      },
    })}
  </script>
);
