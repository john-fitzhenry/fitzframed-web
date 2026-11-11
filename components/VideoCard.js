"use client";
import { useState } from "react";

// Click-to-play: nothing is requested from YouTube until the visitor presses play.
// Without JavaScript the card is a normal link to the video.
export default function VideoCard({ video, sizes }) {
  const [playing, setPlaying] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <article className={`video-card${video.feature ? " is-feature" : ""}`} data-reveal="">
      <div className="video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <a
            className="video-facade"
            data-cursor="Play"
            href={watchUrl}
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey) return;
              e.preventDefault();
              setPlaying(true);
            }}
            aria-label={`Play video: ${video.title}`}
          >
            <img
              src={`/video/${video.slug}-640.webp`}
              srcSet={`/video/${video.slug}-640.webp 640w, /video/${video.slug}-1280.webp 1280w`}
              sizes={sizes}
              alt=""
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
            </span>
          </a>
        )}
      </div>
      <div className="video-meta">
        <p className="label">{video.role} · {video.client}</p>
        <h3>{video.title}</h3>
        <p>{video.note}</p>
      </div>
    </article>
  );
}
