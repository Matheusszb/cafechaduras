import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { WhatsAppFloat } from "./whatsapp-float";
import { breadcrumbSchema } from "@/lib/site";
export function Shell({ children, breadcrumbs }: { children: React.ReactNode; breadcrumbs?: { name: string; path: string }[] }) {
  return <><SiteHeader />{children}<SiteFooter /><WhatsAppFloat />{breadcrumbs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)).replace(/</g, "\\u003c") }} />}</>;
}
