import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "John Fitzhenry | Photo, video and web",
    template: "%s | John Fitzhenry",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "John Fitzhenry | Photo, video and web",
    description: site.description,
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#f4efe6" };

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  image: `${site.url}/photos/john-headshot-1200.jpg`,
  jobTitle: "Photographer, filmmaker and web developer",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Syracuse University" },
  worksFor: { "@type": "Organization", name: "FitzFramed", url: site.links.fitzframed },
  sameAs: Object.values(site.links),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  );
}
