"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "/#video", label: "Video" },
  { href: "/#photo", label: "Photo" },
  { href: "/#live", label: "Live" },
  { href: "/#web", label: "Web" },
  { href: "/#about", label: "About" },
  { href: "/senior-portraits/", label: "Senior portraits" },
];

export default function Header({ current }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="wrap header-row">
        <a className="wordmark" href="/" aria-label="John Fitzhenry, home">
          John Fitzhenry
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" aria-label="Main" className={open ? "is-open" : undefined}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn-small" href={current === "/senior-portraits/" ? "#book" : "/#contact"} onClick={() => setOpen(false)}>
            {current === "/senior-portraits/" ? "Check dates" : "Start a project"}
          </a>
        </nav>
      </div>
    </header>
  );
}
