"use client";
import MasonryGrid from '@/components/MasonryGrid';
import ContactForm from '@/components/ContactForm';
import NavBar from '@/components/NavBar';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <NavBar />

      {/* 
        HERO SECTION 
        - Fullscreen Video Background
        - Centered Typography
      */}
      <section style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        {/* Background Video Layer */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 0
        }}>
          <video
            autoPlay loop muted playsInline
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
          >
            {/* User provided reel link */}
            <source src="https://www.dropbox.com/scl/fi/9r1fjdsijli1tfseleily/T.3-SOM-Medly-Version-1.mp4?rlkey=5rygqkekszdf9jc1syheea27e&st=e5ibzvyj&raw=1" type="video/mp4" />
          </video>
          {/* Overlay gradient for text readability */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.5)'
          }}></div>
        </div>

        {/* Hero Content */}
        <div style={{ zIndex: 2, padding: '0 2rem' }}>
          <ScrollReveal delay={0.2}>
            <span className="tagline" style={{ color: 'rgba(255,255,255,0.8)' }}>Visual Storytelling from a Performer's Perspective</span>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <h1 style={{ marginBottom: '2rem' }}>FITZ FRAMED</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <a href="#work" className="btn">View Reel</a>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', zIndex: 2, opacity: 0.7, animation: 'bounce 2s infinite' }}>
          <span style={{ fontSize: '1.5rem' }}>↓</span>
        </div>
      </section>

      {/* 
        WORK / GALLERY SECTION 
      */}
      <section id="work" className="section container">
        <ScrollReveal width="100%">
          <div className="text-center mb-4" style={{ marginBottom: '4rem' }}>
            <span className="tagline">Selected Works</span>
            <h2>Visual Anthology</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
              From viral acapella hits with T.3 to theatrical promos for FPAC. Capturing the rhythm of performance in every frame.
            </p>
          </div>
        </ScrollReveal>

        <MasonryGrid />
      </section>

      {/* 
        SERVICES CONTEXT 
      */}
      <section id="services" className="section" style={{ background: '#111' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <ScrollReveal>
            <div>
              <span className="tagline">The Performer's Lens</span>
              <h2>Capturing the Essence of Live Moments</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                My storytelling is deeply rooted in my background as a performer, having toured across Europe singing and dancing.
                This experience allows me to instinctively connect with rhythm and emotion on screen.
                Currently a dual-degree student at Syracuse (Newhouse + IT), I blend creative instinct with technical precision.
              </p>
              <ul style={{ listStyle: 'none', color: '#ccc' }}>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #333' }}>+ Music Video Production</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #333' }}>+ Theatrical Promos & Recaps</li>
                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #333' }}>+ Narrative Brand Films</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div style={{ opacity: 0.8 }}>
              {/* Placeholder for an image of 'Fitz' or gear */}
              <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80" alt="Concert Lighting" style={{ width: '100%', borderRadius: '4px' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 
        CONTACT SECTION 
      */}
      <section id="contact" className="section container" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
        <ScrollReveal width="100%">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="tagline">Inquire</span>
            <h2>Start a Project</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Tell me about your vision. Current availability: Syracuse (Now), Boston (Summer 2026).</p>
          </div>
          <ContactForm />
        </ScrollReveal>
      </section>

      <footer className="section container text-center" style={{ padding: '2rem 0', color: '#555', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} Fitz Framed.</p>
      </footer>
    </main>
  );
}
