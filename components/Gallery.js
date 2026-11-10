"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { photos } from "@/data/site";
import Photo from "./Photo";

// Photo grid with a keyboard-accessible lightbox (Esc to close, arrow keys to move).
export default function Gallery({ names, sizes, className = "" }) {
  const [index, setIndex] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);

  const close = useCallback(() => {
    dialog.current?.close();
  }, []);
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + names.length) % names.length)),
    [names.length]
  );

  useEffect(() => {
    if (index !== null && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index === null ? null : names[index];

  return (
    <>
      <ul className={`gallery ${className}`}>
        {names.map((name, i) => (
          <li key={name}>
            <button
              className="shot"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setIndex(i);
              }}
              aria-label={`Open photo: ${photos[name].alt}`}
            >
              <Photo name={name} sizes={sizes} />
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo viewer"
        onClose={() => {
          setIndex(null);
          opener.current?.focus();
        }}
        onClick={(e) => e.target === dialog.current && close()}
      >
        {current && (
          <div className="lightbox-inner">
            <img
              key={current}
              src={`/photos/${current}-1200.webp`}
              alt={photos[current].alt}
              width={photos[current].w}
              height={photos[current].h}
            />
            <div className="lightbox-bar">
              <button onClick={() => step(-1)} aria-label="Previous photo">←</button>
              <span className="label">{index + 1} / {names.length}</span>
              <button onClick={() => step(1)} aria-label="Next photo">→</button>
              <button className="lightbox-close" onClick={close}>Close</button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
