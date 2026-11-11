import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { site } from "@/data/site";
import Motion from "@/components/Motion";

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
      <head>
        {/* Marks the page as script-enabled before first paint so reveal animations don't flash.
            If the motion script never starts, everything is shown after a moment. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!document.documentElement.dataset.motion)document.documentElement.classList.remove('js')},3000)",
          }}
        />
      </head>
      <body>
        <div className="progress" aria-hidden="true" />
        {children}
        <Motion />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </body>
    </html>
  );
}
