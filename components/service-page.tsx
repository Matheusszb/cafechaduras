import { Shell } from "./shell";
import { quoteLink, serviceAreaSchema, siteUrl } from "@/lib/site";

type Props = {
  label: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  points: string[];
  note: string;
};

export function ServicePage({ label, title, intro, image, alt, points, note }: Props) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: label,
    description: intro,
    areaServed: serviceAreaSchema,
    provider: { "@type": "Locksmith", "@id": `${siteUrl}/#business`, name: "CA Instalação de Fechadura", url: siteUrl },
  };

  return <Shell><main>
    <section className="sub-hero"><div className="wrap">
      <div className="breadcrumbs"><a href="/">Início</a> / Serviços / {label}</div>
      <div className="eyebrow">SERVIÇOS EM BLUMENAU E REGIÃO</div>
      <h1>{title}</h1>
      <p>{intro}</p>
      <p>Atendimento em Blumenau, Indaial, Gaspar e Pomerode. <a href="/#areas-atendidas">Veja as cidades atendidas ↗</a></p>
      <a className="btn btn-gold" href={quoteLink(`Olá! Gostaria de solicitar um orçamento para ${label.toLowerCase()}. Minha cidade e bairro são: `)} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span>↗</span></a>
    </div></section>
    <section className="content-section"><div className="wrap content-grid"><img src={image} alt={alt}/><div>
      <div className="eyebrow">COMO FUNCIONA</div>
      <h2>Uma instalação feita para a sua porta.</h2>
      <p>O primeiro passo é conhecer o tipo de porta, a fechadura existente e a solução desejada. Com essas informações, a CA orienta sobre a compatibilidade e os próximos passos.</p>
      <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
      <p>{note}</p>
    </div></div></section>
  </main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /></Shell>;
}
