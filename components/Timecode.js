"use client";
import { useEffect, useRef } from "react";

// A running camera timecode (HH:MM:SS:FF at 24 frames a second).
export default function Timecode() {
  const el = useRef(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const pad = (n) => String(n).padStart(2, "0");
    const id = setInterval(() => {
      const t = (performance.now() - start) / 1000;
      const f = Math.floor((t % 1) * 24);
      const s = Math.floor(t) % 60;
      const m = Math.floor(t / 60) % 60;
      if (el.current) el.current.textContent = `00:${pad(m)}:${pad(s)}:${pad(f)}`;
    }, 84);
    return () => clearInterval(id);
  }, []);
  return <span ref={el}>00:00:00:00</span>;
}
