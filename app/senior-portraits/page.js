import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import { site, seniorGallery, seniorSteps, seniorSpots, seniorFaq } from "@/data/site";

const title = "Syracuse University Senior Portraits";
const description =
  "Cap-and-gown and graduation portraits on the Syracuse University campus, photographed by John Fitzhenry. Now booking the Class of 2027.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/senior-portraits/" },
  openGraph: { title: `${title} | John Fitzhenry`, description, url: "/senior-portraits/", images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Senior portrait photography",
  name: "Syracuse University senior portraits",
  provider: { "@type": "Person", name: site.name, url: site.url },
  areaServed: "Syracuse, NY",
  url: `${site.url}/senior-portraits/`,
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seniorFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SeniorPortraits() {
  return (
    <>
      <Header current="/senior-portraits/" />
      <main id="main">
        <section className="hero hero-senior wrap">
          <div className="hero-copy">
            <p className="label">Syracuse University · Class of 2027</p>
            <h1 className="display">
              Senior portraits, <em>by someone who knows this campus.</em>
            </h1>
            <p className="lede">
              Cap-and-gown portraits for graduating Syracuse seniors, shot by a fellow student who
              also photographs and films for the university. Last spring I photographed 28 seniors in
              under two weeks.
            </p>
            <p className="actions">
              <a className="btn" href="#book">Ask about a session</a>
              <a className="btn btn-ghost" href="#gallery">See the gallery</a>
            </p>
          </div>
          <div className="hero-art">
            <figure className="frame hero-a">
              <Photo name="lizzy_1" sizes="(max-width: 900px) 46vw, 24vw" priority />
            </figure>
            <figure className="frame hero-b">
              <Photo name="dsc03635" sizes="(max-width: 900px) 60vw, 28vw" priority />
              <figcaption className="label">Groups welcome</figcaption>
            </figure>
            <figure className="frame hero-c">
              <Photo name="dsc06907" sizes="(max-width: 900px) 40vw, 18vw" priority />
            </figure>
          </div>
        </section>

        <section className="section tint">
          <div className="wrap">
            <div className="section-head">
              <p className="label">How it works</p>
              <h2 className="title">Three steps, one walk around campus.</h2>
            </div>
            <ol className="steps">
              {seniorSteps.map((s) => (
                <li key={s.n}>
                  <span className="label">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="gallery" className="section wrap">
          <div className="section-head">
            <p className="label">Gallery · Spring 2026</p>
            <h2 className="title">Four years, a few good frames.</h2>
            <p className="lede">Select any photo to see it larger.</p>
          </div>
          <Gallery names={seniorGallery} className="gallery-masonry" sizes="(max-width: 700px) 46vw, (max-width: 1100px) 31vw, 280px" />
        </section>

        <section className="section tint">
          <div className="wrap split">
            <div className="section-head">
              <p className="label">Where we shoot</p>
              <h2 className="title">The places you&apos;ll miss.</h2>
              <p className="lede">
                Sessions move between two or three spots. These are the ones seniors ask for most, and
                I&apos;m always glad to add yours.
              </p>
            </div>
            <ul className="spots">
              {seniorSpots.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section wrap split">
          <div className="section-head">
            <p className="label">Questions</p>
            <h2 className="title">Before you book.</h2>
          </div>
          <div className="faq">
            {seniorFaq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="book" className="section dark">
          <div className="wrap split">
            <div className="section-head">
              <p className="label">Class of 2027</p>
              <h2 className="title">Hold a spot for spring.</h2>
              <p className="lede">
                Tell me roughly when you&apos;d like to shoot and how many people are coming. I&apos;ll
                reply with dates and rates.
              </p>
              <p>
                Or email <a href={`mailto:${site.email}?subject=Senior%20portraits%20(Class%20of%202027)`}>{site.email}</a>.
              </p>
            </div>
            <ContactForm
              subject="Senior portrait inquiry (johnfitzhenry.com)"
              defaultTopic="Senior portraits, just me"
              topics={["Senior portraits, just me", "Senior portraits, with friends or a group", "Something else"]}
            />
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
