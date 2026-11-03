import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { demoItems, pageMetadata, quoteLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Fotos de Fechaduras Digitais em Blumenau",
  "Veja referências de fechaduras digitais e solicite orientação sobre instalação em Blumenau, SC. Modelos e compatibilidade sujeitos à avaliação.",
  "/fechaduras",
);

export default function Fechaduras() {
  return <Shell breadcrumbs={[{name:"Início",path:"/"},{name:"Fechaduras",path:"/fechaduras"}]}><main>
    <section className="sub-hero"><div className="wrap"><div className="breadcrumbs"><a href="/">Início</a> / Fechaduras</div><div className="eyebrow">REFERÊNCIAS VISUAIS</div><h1>Fechaduras para uma rotina <em>mais segura.</em></h1><p>Veja as fotos fornecidas pela CA. Para indicar um modelo, é preciso avaliar sua porta, os recursos desejados e a disponibilidade. Atendimento em Blumenau, SC.</p></div></section>
    <section className="content-section"><div className="wrap"><div className="preview-grid">{demoItems.map(item => <article className="preview-card" key={item.image}><div className="preview-image"><img src={item.image} width={item.width} height={item.height} alt={item.title} loading="lazy" decoding="async" /></div><span>{item.note}</span><h2>{item.title}</h2><a className="photo-quote" href={quoteLink(`Olá! Vi no site da CA a foto de ${item.title.toLowerCase()} e gostaria de orientação e orçamento.`)} target="_blank" rel="noopener noreferrer">Consultar pelo WhatsApp <span>↗</span></a></article>)}</div><p className="gallery-note">As imagens não são um catálogo de modelos disponíveis. Características, compatibilidade e fornecimento são confirmados no atendimento.</p></div></section>
  </main></Shell>;
}
