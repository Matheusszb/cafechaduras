"use client";
import { useState } from "react";
import { quoteLink, serviceCities } from "@/lib/site";

export function ContactForm() {
  const [error, setError] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (!values.nome || !values.whatsapp || !values.cidade) {
      setError("Preencha nome, WhatsApp e cidade.");
      return;
    }
    const message = `Olá! Gostaria de solicitar um orçamento à CA Instalação de Fechadura.\n\nNome: ${values.nome}\nWhatsApp: ${values.whatsapp}\nCidade: ${values.cidade}\nBairro: ${values.bairro || "Não informado"}\nTipo de fechadura: ${values.tipo || "A definir"}\nServiço: ${values.servico || "Gostaria de orientação"}`;
    window.open(quoteLink(message), "_blank", "noopener,noreferrer");
    setError("");
  }

  return <form className="form-card" onSubmit={submit}>
    <label>Nome *<input name="nome" autoComplete="name" required maxLength={100}/></label>
    <label>WhatsApp *<input name="whatsapp" type="tel" autoComplete="tel" required maxLength={30}/></label>
    <label>Cidade *<select name="cidade" defaultValue="" required><option value="" disabled>Selecione sua cidade</option>{serviceCities.map(city => <option key={city} value={city}>{city}</option>)}</select></label>
    <label>Bairro<input name="bairro" maxLength={100} placeholder="Bairro do atendimento"/></label>
    <label>Tipo de fechadura<select name="tipo" defaultValue=""><option value="">Ainda não sei</option><option>Digital</option><option>Convencional</option><option>Quero modernizar</option></select></label>
    <label>Descreva o que você precisa<textarea name="servico" maxLength={1000} placeholder="Conte sobre a porta e a solução desejada"/></label>
    {error && <p role="alert">{error}</p>}
    <button className="btn btn-gold" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
    <p style={{fontSize:11,marginBottom:0}}>As informações são usadas apenas para montar a mensagem no seu WhatsApp; o site não armazena este formulário.</p>
  </form>;
}
