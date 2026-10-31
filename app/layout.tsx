import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "CA Instalação de Fechadura | Blumenau, SC", template: "%s | CA Instalação de Fechadura" },
  description: "Instalação de fechaduras digitais e convencionais em Blumenau. Conheça serviços, instalações e solicite uma avaliação pelo WhatsApp.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "CA Instalação de Fechadura", images: ["/media/fechadura-digital-virtok.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/media/ca-logo.png" },
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
