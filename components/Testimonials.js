import { testimonials } from "@/data/site";

// Renders nothing until data/site.js has approved quotes for this page.
export default function Testimonials({ kind, heading }) {
  const items = testimonials.filter((t) => t.for === kind);
  if (items.length === 0) return null;
  return (
    <section className="section wrap" aria-labelledby={`quotes-${kind}`}>
      <h2 id={`quotes-${kind}`} className="label">{heading}</h2>
      <ul className="quotes">
        {items.map((t) => (
          <li key={t.name + t.quote.slice(0, 12)}>
            <blockquote>
              <p>“{t.quote}”</p>
              <footer>
                <strong>{t.name}</strong>
                {t.role && <span>{t.role}</span>}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
