import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";
import Shader from "@/components/Shader";
import {
  site, seniorGallery, seniorSteps, seniorSpots, seniorFaq, seniorTracks, seniorIncludes,
} from "@/data/site";

const title = "Senior Portraits in Syracuse, NY and Franklin, MA";
const description =
  "Syracuse University graduation portraits and high school senior portraits around Franklin, MA, photographed by John Fitzhenry. Now booking the Class of 2027.";

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
  name: "Senior portraits",
  provider: { "@type": "Person", name: site.name, url: site.url },
  areaServed: ["Syracuse, NY", "Franklin, MA"],
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
            <p className="label">Class of 2027 · Syracuse, NY · Franklin, MA</p>
            <h1 className="display">
              <Words text="Senior portraits" />{" "}
              <em><Words text="you'll actually want to post." start={2} /></em>
            </h1>
            <p className="lede">
              Cap-and-gown sessions on the Syracuse University campus each spring, and high school
              senior portraits around Franklin, Massachusetts each summer. Last spring I photographed
              28 Syracuse seniors in under two weeks.
            </p>
            <p className="actions">
              <a className="btn" data-magnetic="" href="#book">Check dates</a>
              <a className="btn btn-ghost" href="#gallery">See the gallery</a>
            </p>
          </div>
          <div className="hero-art">
            <figure className="frame hero-a" data-reveal="clip" style={{ "--i": 0 }}>
              <Photo name="lizzy_1" sizes="(max-width: 900px) 46vw, 24vw" priority />
            </figure>
            <figure className="frame hero-b" data-reveal="clip" style={{ "--i": 2 }}>
              <Photo name="dsc03635" sizes="(max-width: 900px) 60vw, 28vw" priority />
              <figcaption className="label">Groups welcome</figcaption>
            </figure>
            <figure className="frame hero-c" data-reveal="clip" style={{ "--i": 1 }}>
              <Photo name="dsc06907" sizes="(max-width: 900px) 40vw, 18vw" priority />
            </figure>
          </div>
        </section>

        <section className="section tint" aria-labelledby="tracks-h">
          <div className="wrap">
            <div className="section-head" data-stagger="">
              <p className="label">Two kinds of senior</p>
              <h2 id="tracks-h" className="title">Which one are you?</h2>
            </div>
            <ul className="tracks" data-stagger="">
              {seniorTracks.map((t) => (
                <li key={t.id} id={t.id}>
                  <p className="label">{t.label}</p>
                  <h3>{t.title}</h3>
                  <dl>
                    {t.points.map(([k, v]) => (
                      <div key={k}>
                        <dt className="label">{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="track-note">{t.note}</p>
                  <a className="btn" data-magnetic="" href="#book">{t.cta}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="section wrap">
          <div className="section-head" data-stagger="">
            <p className="label">Gallery · Syracuse, spring 2026</p>
            <h2 className="title">Four years, a few good frames.</h2>
            <p className="lede">Select any photo to see it larger.</p>
          </div>
          <Gallery names={seniorGallery} className="gallery-masonry" sizes="(max-width: 700px) 46vw, (max-width: 1100px) 31vw, 280px" />
          <p className="actions gallery-cta">
            <a className="btn" data-magnetic="" href="#book">Check dates for your session</a>
          </p>
        </section>

        <section className="section tint">
          <div className="wrap">
            <div className="section-head" data-stagger="">
              <p className="label">What you get</p>
              <h2 className="title">Everything from the first email to the final file.</h2>
            </div>
            <ul className="cards cards-flush" data-stagger="">
              {seniorIncludes.map((c) => (
                <li key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </li>
              ))}
            </ul>
            <ol className="steps steps-after" data-stagger="">
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

        <section className="section wrap split">
          <div className="section-head" data-stagger="">
            <p className="label">Syracuse spots</p>
            <h2 className="title">The places you&apos;ll miss.</h2>
            <p className="lede">
              Campus sessions move between two or three spots. These are the ones seniors ask for
              most, and I&apos;m always glad to add yours.
            </p>
          </div>
          <ul className="spots" data-stagger="">
            {seniorSpots.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="section tint">
          <div className="wrap split">
            <div className="section-head" data-stagger="">
              <p className="label">Questions</p>
              <h2 className="title">Before you book.</h2>
            </div>
            <div className="faq" data-stagger="">
              {seniorFaq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="section dark has-shader">
          <Shader />
          <div className="wrap split">
            <div className="section-head" data-stagger="">
              <p className="label">Class of 2027</p>
              <h2 className="title">Check dates and rates.</h2>
              <p className="lede">
                Three quick things and I can quote you: your school, roughly when you&apos;d like to
                shoot, and how many people are coming.
              </p>
              <p>
                Or email <a href={`mailto:${site.email}?subject=Senior%20portraits%20(Class%20of%202027)`}>{site.email}</a>.
              </p>
            </div>
            <ContactForm
              subject="Senior portrait inquiry (johnfitzhenry.com)"
              topicLabel="I'm a…"
              defaultTopic="Syracuse University senior"
              topics={["Syracuse University senior", "High school senior", "Parent of a senior", "Group or organization"]}
              extra={{ name: "school", label: "School and graduation year", placeholder: "e.g. Syracuse 2027, or Franklin High 2027" }}
              messagePlaceholder="Rough dates, how many people, and anything you have in mind."
            />
          </div>
        </section>
      </main>
      <a className="sticky-cta" href="#book">Check dates and rates</a>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
