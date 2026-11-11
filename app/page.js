import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import VideoCard from "@/components/VideoCard";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Words from "@/components/Words";
import Marquee from "@/components/Marquee";
import Shader from "@/components/Shader";
import Timecode from "@/components/Timecode";
import {
  site, stats, disciplines, videos, videoAlso, liveWork, photoWork,
  webProjects, webAlso, clients, toolkit, intents, nextSteps, marquee, stripGallery,
} from "@/data/site";

export default function Home() {
  const [feature, ...rest] = videos;

  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="label">Syracuse, NY · Franklin, MA · London this fall</p>
            <h1 className="display">
              <Words text="Photographer, filmmaker" />{" "}
              <em><Words text="and the person who builds the website too." start={2} /></em>
            </h1>
            <p className="lede" data-reveal="" style={{ "--i": 5 }}>
              I&apos;m John Fitzhenry. I shoot senior portraits in Syracuse and Massachusetts, make
              video for Syracuse University and performing arts companies across New England, and
              design and build websites.
            </p>
            <p className="actions" data-reveal="" style={{ "--i": 6 }}>
              <a className="btn" data-magnetic="" href="#contact">Start a project</a>
              <a className="btn btn-ghost" href="/senior-portraits/">Book senior portraits</a>
            </p>
          </div>
          <div className="hero-art">
            <figure className="frame hero-a" data-reveal="clip" style={{ "--i": 0 }}>
              <Photo name="dsc05859" sizes="(max-width: 900px) 46vw, 24vw" priority />
              <span className="rec" aria-hidden="true"><i /> REC <Timecode /></span>
            </figure>
            <figure className="frame hero-b" data-reveal="clip" style={{ "--i": 2 }}>
              <img
                src="/video/t3-sound-of-music-640.webp"
                alt="Still from the T.3 Sound of Music Medley music video"
                width="1280"
                height="720"
              />
              <figcaption className="label">Music video · Director</figcaption>
            </figure>
            <figure className="frame hero-c" data-reveal="clip" style={{ "--i": 1 }}>
              <Photo name="dsc02594" sizes="(max-width: 900px) 40vw, 18vw" priority />
            </figure>
          </div>
        </section>

        {/* Route each kind of visitor */}
        <section className="wrap" aria-label="Where to start">
          <ul className="intents" data-stagger="">
            {intents.map((i) => (
              <li key={i.who}>
                <a href={i.href}>
                  <h2>{i.who}</h2>
                  <p>{i.body}</p>
                  <span className="more">{i.cta} →</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Proof */}
        <section className="wrap" aria-label="By the numbers">
          <dl className="stats" data-stagger="">
            {stats.map((s) => (
              <div key={s.label}>
                <dt data-count="">{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Marquee items={marquee} />

        {/* Disciplines */}
        <section className="section wrap">
          <div className="section-head" data-stagger="">
            <p className="label">What I do</p>
            <h2 className="title">One brief, four disciplines.</h2>
            <p className="lede">
              Most projects need more than one of these. A show needs photos, a promo and a page to
              sell tickets from. I can carry all of it, so nothing gets lost between vendors.
            </p>
          </div>
          <ol className="disciplines" data-stagger="">
            {disciplines.map((d) => (
              <li key={d.n}>
                <a href={d.href}>
                  <span className="label">{d.n}</span>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <span className="more" aria-hidden="true">View →</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Video */}
        <section id="video" className="section dark">
          <div className="wrap">
            <div className="section-head" data-stagger="">
              <p className="label">01 · Video &amp; film</p>
              <h2 className="title">Directed, shot and cut.</h2>
              <p className="lede">
                I grew up on stage, so I know what a performer needs from a camera. That shows most in
                music videos and live performance, and it carries into everything else.
              </p>
            </div>
            <div className="video-grid">
              <VideoCard video={feature} sizes="(max-width: 900px) 100vw, 1100px" />
              {rest.map((v) => (
                <VideoCard key={v.id} video={v} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              ))}
            </div>
            <div className="also" data-stagger="">
              <h3 className="label">Also</h3>
              <ul>
                {videoAlso.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Photography */}
        <section id="photo" className="strip" data-strip="">
          <div className="strip-sticky">
            <div className="wrap">
              <div className="section-head" data-stagger="">
                <p className="label">02 · Photography</p>
                <h2 className="title">Portraits people actually print.</h2>
                <p className="lede">
                  In spring 2026 I photographed 28 graduating Syracuse seniors in under two weeks.
                  These are from those sessions.
                </p>
              </div>
            </div>
            <Gallery names={stripGallery} className="gallery-strip" sizes="(max-width: 700px) 70vw, 34vh" />
          </div>
        </section>
        <section className="wrap after-strip">
          <ul className="cards cards-flush" data-stagger="">
            {photoWork.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                {p.href && <a className="text-link" href={p.href}>{p.cta} →</a>}
              </li>
            ))}
          </ul>
        </section>

        {/* Live */}
        <section id="live" className="section tint">
          <div className="wrap split">
            <div className="section-head" data-stagger="">
              <p className="label">03 · Live &amp; multimedia</p>
              <h2 className="title">When it only happens once.</h2>
              <p className="lede">
                Live work has no second take. I plan the signal path, run the show, and leave with an
                archive worth keeping.
              </p>
            </div>
            <ul className="rows" data-stagger="">
              {liveWork.map((l) => (
                <li key={l.title}>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Web */}
        <section id="web" className="section wrap">
          <div className="section-head" data-stagger="">
            <p className="label">04 · Web design &amp; development</p>
            <h2 className="title">Websites that load fast and do something.</h2>
            <p className="lede">
              I design and build for the web, working with AI coding agents while I make the product,
              design and quality calls. All three of these are live.
            </p>
          </div>
          <ul className="web-grid" data-stagger="">
            {webProjects.map((w) => (
              <li key={w.slug}>
                <a className="browser" data-cursor="Visit" href={w.url} rel="noopener" aria-label={`Visit ${w.display}`}>
                  <span className="browser-bar" aria-hidden="true">
                    <i /><i /><i />
                    <span>{w.display}</span>
                  </span>
                  <img
                    src={`/work/${w.slug}-720.webp`}
                    srcSet={`/work/${w.slug}-720.webp 720w, /work/${w.slug}-1440.webp 1440w`}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    alt={w.alt}
                    width="1440"
                    height="900"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <p className="label">{w.role}</p>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <ul className="tags" aria-label="Built with">
                  {w.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="also" data-stagger="">
            <h3 className="label">Also</h3>
            <ul>
              {webAlso.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Clients */}
        <section className="wrap clients" aria-labelledby="clients-h">
          <h2 id="clients-h" className="label">Worked with</h2>
          <ul>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="section wrap about">
          <figure className="frame about-photo" data-reveal="clip">
            <Photo name="john-headshot" sizes="(max-width: 900px) 70vw, 380px" />
          </figure>
          <div>
            <p className="label">About</p>
            <h2 className="title">Performer first, then the person behind the camera.</h2>
            <p>
              I&apos;m a junior at Syracuse University, studying Television, Radio &amp; Film at the
              Newhouse School and Innovation, Society &amp; Technology at the iSchool. I started making
              media for my hometown theater in Franklin, Massachusetts, in 2020, and that became my
              production company, FitzFramed.
            </p>
            <p>
              Before any of that I was on stage. I&apos;ve sung and danced in Austria, Italy,
              Switzerland, Belgium and France, and kept performing at Syracuse with First Year
              Players and the Otto Tunes. Since January 2025
              I&apos;ve also been a multimedia intern with the university&apos;s Division of Marketing,
              shooting and editing for @syracuseu.
            </p>
            <p>
              I&apos;m studying in London this fall and back in Syracuse for spring 2027.
            </p>
            <dl className="toolkit" data-stagger="">
              {toolkit.map((t) => (
                <div key={t.title}>
                  <dt className="label">{t.title}</dt>
                  <dd>{t.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section dark has-shader">
          <Shader />
          <div className="wrap split">
            <div className="section-head" data-stagger="">
              <p className="label">Contact</p>
              <h2 className="title">Tell me what you&apos;re making.</h2>
              <p className="lede">
                A shoot, a show, a site, or senior portraits. Send a few details and I&apos;ll reply
                with next steps.
              </p>
              <ol className="next">
                {nextSteps.map((t, i) => (
                  <li key={t}><span className="label">0{i + 1}</span>{t}</li>
                ))}
              </ol>
              <p>
                Or email <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
            <ContactForm
              subject="New inquiry (johnfitzhenry.com)"
              defaultTopic="Video production"
              topics={["Video production", "Photography", "Senior portraits", "Live event or podcast", "Website", "Something else"]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
