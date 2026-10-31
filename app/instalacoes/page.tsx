import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { quoteLink } from "@/lib/site";

const photos = [
  ["fechadura-digital-porta-madeira.jpg", "Fechadura digital em porta de madeira"],
  ["fechadura-digital-porta-branca.jpg", "Fechadura digital em porta branca"],
  ["fechadura-digital-virtok.jpg", "Fechadura digital em porta amadeirada"],
  ["fechadura-digital-teclado.jpg", "Fechadura digital com teclado"],
  ["fechadura-digital-porta-amadeirada.jpg", "Fechadura digital instalada em porta de madeira"],
  ["fechadura-intelbras-fr101.jpg", "Detalhe de fechadura eletrônica"],
];

export const metadata: Metadata = {
  title: "Fotos de fechaduras e instalações em Blumenau",
  description: "Veja fotografias fornecidas pela CA Instalação de Fechadura e solicite avaliação para seu imóvel em Blumenau.",
  alternates: { canonical: "/instalacoes" },
};

export default function Instalacoes() {
  return <Shell><main><section className="sub-hero"><div className="wrap"><div className="breadcrumbs"><a href="/">Início</a> / Instalações</div><div className="eyebrow">IMAGENS DA CA</div><h1>Nossas <em>instalações.</em></h1><p>Fotografias fornecidas pela empresa. Os modelos, locais e detalhes de cada serviço devem ser confirmados diretamente com a CA.</p></div></section><section className="content-section"><div className="wrap"><div className="gallery-grid">{photos.map(([file, description]) => <figure key={file}><img src={`/media/${file}`} alt={description} loading="lazy" /><figcaption>{description}<br />Imagem fornecida pela CA · detalhes a confirmar</figcaption></figure>)}</div><div style={{marginTop:40}}><a className="btn btn-gold" href={quoteLink()} target="_blank" rel="noopener noreferrer">Solicitar instalação <span>↗</span></a></div></div></section></main></Shell>;
}
