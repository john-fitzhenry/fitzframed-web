import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: `${site.url}/`, priority: 1 },
    { url: `${site.url}/senior-portraits/`, priority: 0.9 },
  ];
}
