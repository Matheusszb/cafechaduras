"use client";
import { useState } from "react";
import { quoteLink } from "@/lib/site";

const links = [
  ["Início", "/"], ["Sobre nós", "/#sobre"], ["Serviços", "/#servicos"],
  ["Fechaduras", "/fechaduras"], ["Instalações", "/instalacoes"],
  ["Dúvidas", "/#duvidas"], ["Contato", "/contato"],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner wrap">
    <a className="brand" href="/" aria-label="CA Instalação de Fechadura, início"><img src="/media/ca-logo.webp" alt="" width="420" height="420" /><span>CA <small>INSTALAÇÃO DE FECHADURA</small></span></a>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <a className="header-cta" href={quoteLink()} target="_blank" rel="noopener noreferrer">Solicitar orçamento <span>↗</span></a>
    <button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
  </div></header>;
}
