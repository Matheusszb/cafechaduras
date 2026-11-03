import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/fechaduras",
    "/instalacoes",
    "/contato",
    "/instalacao-de-fechadura-digital-blumenau",
    "/instalacao-de-fechaduras-convencionais",
    "/politica-de-privacidade",
  ];
  return pages.map((path) => ({ url: path === "/" ? siteUrl : siteUrl + path }));
}
