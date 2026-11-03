import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import { ContactForm } from "@/components/contact-form";
import { instagram, pageMetadata, whatsapp } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Contato e Orçamento de Fechaduras em Blumenau",
  "Solicite orçamento de instalação de fechaduras em Blumenau, SC. Envie fotos da porta e converse com a CA Fechaduras Digitais pelo WhatsApp.",
  "/contato",
);

export default function Contact() {
  return <Shell breadcrumbs={[{ name: "Início", path: "/" }, { name: "Contato", path: "/contato" }]}><main>
    <section className="sub-hero"><div className="wrap">
      <div className="breadcrumbs"><a href="/">Início</a> / Contato</div>
      <div className="eyebrow">FALE COM A CA</div>
      <h1>Vamos encontrar a solução para <em>a sua porta.</em></h1>
      <p>Solicite instalação de fechaduras em Blumenau. A mensagem será aberta no seu WhatsApp para você revisar e enviar.</p>
    </div></section>
    <section className="content-section"><div className="wrap contact-grid"><div>
      <div className="eyebrow">ATENDIMENTO EM BLUMENAU, SC</div>
      <h2>Conte o que você precisa.</h2>
      <p>Uma foto da porta e da fechadura atual ajuda na avaliação de compatibilidade. Você pode anexá-la diretamente na conversa.</p>
      <p><strong>WhatsApp</strong><br/><a href={whatsapp} target="_blank" rel="noopener noreferrer">(47) 99263-4111 ↗</a></p>
      <p><strong>Instagram</strong><br/><a href={instagram} target="_blank" rel="noopener noreferrer">@ca_fechaduras_digitais ↗</a></p>
      <p><strong>Área de atendimento</strong><br/>Blumenau, SC · referência em Badenfurt</p>
    </div><ContactForm/></div></section>
  </main></Shell>;
}
