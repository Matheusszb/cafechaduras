import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { pageMetadata, quoteLink } from "@/lib/site";

const photos = [
  ["fechadura-digital-porta-madeira.webp", "Fechadura digital em porta de madeira"],
  ["fechadura-digital-porta-branca.webp", "Fechadura digital em porta branca"],
  ["fechadura-digital-virtok.webp", "Fechadura digital em porta amadeirada"],
  ["fechadura-digital-teclado.webp", "Fechadura digital com teclado"],
  ["fechadura-digital-porta-amadeirada.webp", "Fechadura digital instalada em porta de madeira"],
  ["fechadura-intelbras-fr101.webp", "Detalhe de fechadura eletrônica"],
];

export const metadata: Metadata = pageMetadata(
  "Fotos de fechaduras instaladas em Blumenau e região",
  "Conheça fotos fornecidas pela CA e solicite instalação de fechadura em Blumenau, Indaial, Gaspar ou Pomerode, SC.",
  "/instalacoes",
);

export default function Instalacoes() {
  return <Shell><main><section className="sub-hero"><div className="wrap"><div className="breadcrumbs"><a href="/">Início</a> / Instalações</div><div className="eyebrow">IMAGENS DA CA</div><h1>Nossas <em>instalações.</em></h1><p>Fotografias fornecidas pela empresa. Os modelos, locais e detalhes de cada serviço devem ser confirmados diretamente com a CA. Solicite avaliação em Blumenau, Indaial, Gaspar ou Pomerode.</p></div></section><section className="content-section"><div className="wrap"><div className="gallery-grid">{photos.map(([file, description]) => <figure key={file}><img src={`/media/${file}`} alt={description} loading="lazy" decoding="async" /><figcaption>{description}<br />Imagem fornecida pela CA · detalhes a confirmar</figcaption></figure>)}</div><div style={{marginTop:40}}><a className="btn btn-gold" href={quoteLink()} target="_blank" rel="noopener noreferrer">Solicitar instalação <span>↗</span></a></div></div></section></main></Shell>;
}
