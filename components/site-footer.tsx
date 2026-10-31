import { instagram, quoteLink } from "@/lib/site";
export function SiteFooter() { return <footer className="site-footer"><div className="wrap footer-grid">
  <div><img className="footer-logo" src="/media/ca-logo.png" alt="CA Instalação de Fechadura" /><p>Instalação cuidadosa de fechaduras digitais e convencionais para residências e empresas em Blumenau.</p></div>
  <div><h3>Explore</h3><a href="/fechaduras">Fechaduras</a><a href="/instalacoes">Instalações</a><a href="/instalacao-de-fechadura-digital-blumenau">Fechaduras digitais</a><a href="/instalacao-de-fechaduras-convencionais">Fechaduras convencionais</a></div>
  <div><h3>Contato</h3><a href={quoteLink()} target="_blank" rel="noopener noreferrer">(47) 99263-4111</a><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><span>Blumenau · Santa Catarina</span></div>
</div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} CA Instalação de Fechadura</span><a href="/politica-de-privacidade">Política de privacidade</a></div></footer>; }
