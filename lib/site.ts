import type { Metadata } from "next";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const baseUrl = configuredUrl
  ? /^https?:\/\//i.test(configuredUrl) ? configuredUrl : `https://${configuredUrl}`
  : vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
export const siteUrl = baseUrl.replace(/\/+$/, "");
export const whatsapp = "https://wa.me/5547992634111";
export const instagram = "https://www.instagram.com/ca_fechaduras_digitais/";
export const googleBusinessProfile = "https://share.google/1UCUr97iSQCPg8yVX";
export const serviceCities = ["Blumenau", "Indaial", "Gaspar", "Pomerode"] as const;
export const serviceAreaSchema = serviceCities.map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Santa Catarina" } }));
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "CA Instalação de Fechadura",
      title: `${title} | CA Instalação de Fechadura`,
      description,
      url: `${siteUrl}${pathname}`,
      images: ["/media/fechadura-digital-virtok.jpg"],
    },
  };
}
export function quoteLink(message = "Olá! Gostaria de solicitar um orçamento para instalação de fechadura. Minha cidade e bairro são: ") {
  return `${whatsapp}?text=${encodeURIComponent(message)}`;
}
export const demoItems = [
  { image: "/media/fechadura-digital-virtok.webp", title: "Fechadura digital em porta de madeira", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-madeira.webp", title: "Fechadura digital com maçaneta", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-teclado.webp", title: "Fechadura digital com teclado", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-branca.webp", title: "Fechadura digital em porta branca", note: "Referência visual · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-amadeirada.webp", title: "Fechadura digital em porta amadeirada", note: "Referência visual · modelo a confirmar" },
  { image: "/media/fechadura-intelbras-fr101.webp", title: "Detalhe de fechadura eletrônica", note: "Referência visual · compatibilidade a avaliar" },
];
