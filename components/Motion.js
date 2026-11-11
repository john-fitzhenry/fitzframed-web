"use client";
import { useEffect } from "react";

// All page-level motion in one place: scroll reveals, count-up numbers, the scroll
// progress bar, the horizontal photo strip, hero parallax, the cursor badge and
// magnetic buttons. Everything is skipped when the visitor prefers reduced motion,
// and pointer effects only run with a mouse or trackpad.
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = "1";
    root.classList.add("js");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const off = [];
    const on = (el, type, fn, opts) => {
      el.addEventListener(type, fn, opts);
      off.push(() => el.removeEventListener(type, fn, opts));
    };

    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    document.querySelectorAll("[data-stagger]").forEach((parent) =>
      [...parent.children].forEach((child, i) => {
        if (!child.style.getPropertyValue("--i")) child.style.setProperty("--i", i % 8);
        child.setAttribute("data-reveal", child.getAttribute("data-reveal") || "");
      })
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    off.push(() => io.disconnect());

    // Count-up numbers ("1.8M+", "180K", "28")
    const counts = new IntersectionObserver((entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        counts.unobserve(e.target);
        const el = e.target;
        const m = el.textContent.match(/^([\d.]+)(.*)$/);
        if (!m || reduce) return;
        const end = parseFloat(m[1]);
        const decimals = (m[1].split(".")[1] || "").length;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / 1400);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (end * eased).toFixed(decimals) + m[2];
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      })
    );
    document.querySelectorAll("[data-count]").forEach((el) => counts.observe(el));
    off.push(() => counts.disconnect());

    // Scroll: progress bar + horizontal photo strip
    const strips = [...document.querySelectorAll("[data-strip]")];
    const stripOn = () => fine && !reduce && innerWidth > 900;
    const measure = () =>
      strips.forEach((s) => {
        const track = s.querySelector(".gallery-strip");
        if (!track) return;
        if (!stripOn()) {
          s.classList.remove("strip-on");
          s.style.height = "";
          track.style.transform = "";
          return;
        }
        s.classList.add("strip-on");
        const distance = Math.max(0, track.scrollWidth - innerWidth);
        s.dataset.distance = distance;
        s.style.height = `${innerHeight + distance}px`;
      });
    let ticking = false;
    const frame = () => {
      ticking = false;
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty("--progress", max > 0 ? scrollY / max : 0);
      strips.forEach((s) => {
        if (!s.classList.contains("strip-on")) return;
        const distance = Number(s.dataset.distance) || 0;
        const p = Math.min(1, Math.max(0, -s.getBoundingClientRect().top / (distance || 1)));
        s.querySelector(".gallery-strip").style.transform = `translate3d(${-p * distance}px,0,0)`;
      });
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(frame);
    };
    measure();
    frame();
    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", () => {
      measure();
      onScroll();
    });
    on(window, "load", () => {
      measure();
      onScroll();
    });

    if (fine && !reduce) {
      // Hero photos drift against the pointer
      document.querySelectorAll(".hero").forEach((hero) => {
        const art = hero.querySelector(".hero-art");
        if (!art) return;
        on(hero, "pointermove", (e) => {
          const b = hero.getBoundingClientRect();
          art.style.setProperty("--px", ((e.clientX - b.left) / b.width - 0.5).toFixed(3));
          art.style.setProperty("--py", ((e.clientY - b.top) / b.height - 0.5).toFixed(3));
        });
      });

      // Buttons lean toward the pointer
      document.querySelectorAll("[data-magnetic]").forEach((btn) => {
        on(btn, "pointermove", (e) => {
          const b = btn.getBoundingClientRect();
          const x = (e.clientX - b.left - b.width / 2) * 0.22;
          const y = (e.clientY - b.top - b.height / 2) * 0.3;
          btn.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
        });
        on(btn, "pointerleave", () => (btn.style.transform = ""));
      });

      // A small badge that follows the pointer over photos, videos and sites
      const cursor = document.createElement("div");
      cursor.className = "cursor";
      cursor.setAttribute("aria-hidden", "true");
      document.body.appendChild(cursor);
      off.push(() => cursor.remove());
      let cx = 0, cy = 0, tx = 0, ty = 0, raf = 0, shown = false;
      const follow = () => {
        cx += (tx - cx) * 0.2;
        cy += (ty - cy) * 0.2;
        cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
        raf = shown || Math.abs(tx - cx) > 0.5 ? requestAnimationFrame(follow) : 0;
      };
      on(document, "pointermove", (e) => {
        tx = e.clientX;
        ty = e.clientY;
        const hit = e.target.closest && e.target.closest("[data-cursor]");
        if (hit) {
          if (!shown) {
            cx = tx;
            cy = ty;
          }
          cursor.textContent = hit.dataset.cursor;
          cursor.classList.add("on");
          shown = true;
        } else if (shown) {
          cursor.classList.remove("on");
          shown = false;
        }
        if (!raf) raf = requestAnimationFrame(follow);
      });
      off.push(() => cancelAnimationFrame(raf));
    }

    return () => off.forEach((fn) => fn());
  }, []);

  return null;
}
