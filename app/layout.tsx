import type { Metadata } from "next";
import { businessName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: { google: "thcY7qqGe0h_hOPeVs3hBgTrop1hXvSzfY_1IsuzUeM" },
  title: { default: "Instalação de Fechaduras Digitais em Blumenau | CA", template: "%s | CA Fechaduras Digitais" },
  description: "Instalação de fechaduras digitais em Blumenau, SC. A CA Fechaduras Digitais atende residências e empresas. Solicite uma avaliação pelo WhatsApp.",
  alternates: { canonical: siteUrl + "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: businessName, title: "Instalação de Fechaduras Digitais em Blumenau | CA", description: "Instalação de fechaduras digitais em Blumenau, SC. Solicite uma avaliação pelo WhatsApp.", url: siteUrl, images: [{ url: siteUrl + "/media/fechadura-digital-virtok.jpg", width: 1200, height: 1600, alt: "Fechadura digital em porta de madeira" }] },
  twitter: { card: "summary_large_image", title: "Instalação de Fechaduras Digitais em Blumenau | CA", description: "Instalação de fechaduras digitais em Blumenau, SC. Solicite uma avaliação pelo WhatsApp.", images: [siteUrl + "/media/fechadura-digital-virtok.jpg"] },
  icons: { icon: "/media/ca-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
