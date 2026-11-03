import type { Metadata } from "next";

export const siteUrl = "https://www.cainstalacaodefechaduras.com.br";
export const businessName = "CA Fechaduras Digitais";
export const whatsapp = "https://wa.me/5547992634111";
export const instagram = "https://www.instagram.com/ca_fechaduras_digitais/";
export const serviceCities = ["Blumenau"] as const;
export const serviceAreaSchema = { "@type": "City", name: "Blumenau", containedInPlace: { "@type": "State", name: "Santa Catarina" } };

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const url = siteUrl + pathname;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: businessName,
      title,
      description,
      url,
      images: [{ url: siteUrl + "/media/fechadura-digital-virtok.jpg", width: 1200, height: 1600, alt: "Fechadura digital em porta de madeira" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [siteUrl + "/media/fechadura-digital-virtok.jpg"] },
  };
}

export const businessSchema = {
  "@type": "LocalBusiness",
  "@id": siteUrl + "/#business",
  name: businessName,
  description: "Instalação de fechaduras digitais e convencionais em Blumenau, Santa Catarina.",
  url: siteUrl,
  telephone: "+5547992634111",
  address: { "@type": "PostalAddress", addressLocality: "Blumenau", addressRegion: "SC", addressCountry: "BR" },
  areaServed: serviceAreaSchema,
  image: siteUrl + "/media/ca-logo.webp",
  sameAs: [instagram],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": siteUrl + "/#website",
  name: businessName,
  url: siteUrl,
  inLanguage: "pt-BR",
  publisher: { "@id": siteUrl + "/#business" },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: siteUrl + path,
    })),
  };
}

export function quoteLink(message = "Olá! Encontrei a CA Fechaduras Digitais pelo site e gostaria de solicitar um orçamento de instalação de fechadura digital em Blumenau.") {
  return whatsapp + "?text=" + encodeURIComponent(message);
}

export const demoItems = [
  { image: "/media/fechadura-digital-virtok.webp", width: 1200, height: 1600, title: "Fechadura digital em porta de madeira", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-madeira.webp", width: 1200, height: 1600, title: "Fechadura digital com maçaneta", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-teclado.webp", width: 1200, height: 1600, title: "Fechadura digital com teclado", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-branca.webp", width: 900, height: 1600, title: "Fechadura digital em porta branca", note: "Referência visual · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-amadeirada.webp", width: 720, height: 1280, title: "Fechadura digital em porta amadeirada", note: "Referência visual · modelo a confirmar" },
  { image: "/media/fechadura-intelbras-fr101.webp", width: 1200, height: 1600, title: "Detalhe de fechadura eletrônica", note: "Referência visual · compatibilidade a avaliar" },
];
