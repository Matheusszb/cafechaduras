import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Instalação de Fechaduras | Blumenau, Indaial, Gaspar e Pomerode", template: "%s | CA Instalação de Fechadura" },
  description: "Instalação de fechaduras digitais e convencionais em Blumenau, Indaial, Gaspar e Pomerode, SC. Solicite uma avaliação pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "CA Instalação de Fechadura", title: "Instalação de Fechaduras | Blumenau, Indaial, Gaspar e Pomerode", description: "Fechaduras digitais e convencionais em Blumenau, Indaial, Gaspar e Pomerode. Solicite uma avaliação.", images: ["/media/fechadura-digital-virtok.jpg"] },
  twitter: { card: "summary_large_image" },
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
