const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const baseUrl = configuredUrl
  ? /^https?:\/\//i.test(configuredUrl) ? configuredUrl : `https://${configuredUrl}`
  : vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
export const siteUrl = baseUrl.replace(/\/+$/, "");
export const whatsapp = "https://wa.me/5547992634111";
export const instagram = "https://www.instagram.com/ca_fechaduras_digitais/";
export function quoteLink(message = "Olá! Gostaria de solicitar um orçamento para instalação de fechadura em Blumenau.") {
  return `${whatsapp}?text=${encodeURIComponent(message)}`;
}
export const demoItems = [
  { image: "/media/fechadura-digital-virtok.jpg", title: "Fechadura digital em porta de madeira", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-madeira.jpg", title: "Fechadura digital com maçaneta", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-teclado.jpg", title: "Fechadura digital com teclado", note: "Referência visual de instalação · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-branca.jpg", title: "Fechadura digital em porta branca", note: "Referência visual · modelo a confirmar" },
  { image: "/media/fechadura-digital-porta-amadeirada.jpg", title: "Fechadura digital em porta amadeirada", note: "Referência visual · modelo a confirmar" },
  { image: "/media/fechadura-intelbras-fr101.jpg", title: "Detalhe de fechadura eletrônica", note: "Referência visual · compatibilidade a avaliar" },
];
