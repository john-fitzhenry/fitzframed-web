// An endlessly scrolling band of words. The list is repeated so the loop is seamless.
export default function Marquee({ items }) {
  const row = (hidden) => (
    <ul aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="group" aria-label="What I make">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
