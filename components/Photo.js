import { photos } from "@/data/site";

// Responsive <picture> for files in /public/photos (640px + 1200px WebP, 1200px JPEG fallback).
export default function Photo({ name, sizes = "100vw", priority = false, className, alt }) {
  const p = photos[name];
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/photos/${name}-640.webp 640w, /photos/${name}-1200.webp 1200w`}
        sizes={sizes}
      />
      <img
        className={className}
        src={`/photos/${name}-1200.jpg`}
        alt={alt ?? p.alt}
        width={p.w}
        height={p.h}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
