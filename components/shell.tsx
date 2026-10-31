import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { WhatsAppFloat } from "./whatsapp-float";
export function Shell({ children }: { children: React.ReactNode }) { return <><SiteHeader />{children}<SiteFooter /><WhatsAppFloat /></>; }
