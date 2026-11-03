import { Shell } from "./shell";
import { quoteLink, serviceAreaSchema, siteUrl } from "@/lib/site";

type Props = {
  path: string;
  label: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  points: string[];
  note: string;
};

export function ServicePage({ path, label, title, intro, image, alt, points, note }: Props) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: label,
    description: intro,
    url: `${siteUrl}${path}`,
    areaServed: serviceAreaSchema,
    provider: { "@id": `${siteUrl}/#business` },
  };

  return <Shell breadcrumbs={[{name:"Início",path:"/"},{name:label,path}]}><main>
    <section className="sub-hero"><div className="wrap">
      <div className="breadcrumbs"><a href="/">Início</a> / {label}</div>
      <div className="eyebrow">SERVIÇOS EM BLUMENAU, SC</div>
      <h1>{title}</h1>
      <p>{intro}</p>
      <p>Atendimento em Blumenau, SC. <a href="/#areas-atendidas">Veja a área de atendimento ↗</a></p>
      <a className="btn btn-gold" href={quoteLink(`Olá! Gostaria de solicitar um orçamento para ${label.toLowerCase()}. Minha cidade e bairro são: `)} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span>↗</span></a>
    </div></section>
    <section className="content-section"><div className="wrap content-grid"><img src={image} width={image.includes("ca-logo") ? 1254 : 1200} height={image.includes("ca-logo") ? 1254 : 1600} alt={alt} loading="lazy" decoding="async"/><div>
      <div className="eyebrow">COMO FUNCIONA</div>
      <h2>Uma instalação feita para a sua porta.</h2>
      <p>O primeiro passo é conhecer o tipo de porta, a fechadura existente e a solução desejada. Com essas informações, a CA orienta sobre a compatibilidade e os próximos passos.</p>
      <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>
      <p>{note}</p>
    </div></div></section>
  </main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /></Shell>;
}
