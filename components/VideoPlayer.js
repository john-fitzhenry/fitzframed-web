"use client";
import React, { useRef, useEffect } from 'react';

export default function VideoPlayer({ src, poster }) {
    const videoRef = useRef(null);

    // Ensure raw=1 format
    const getDirectLink = (url) => {
        if (!url) return "";
        if (url.includes("raw=1")) return url;
        if (url.includes("dl=0")) return url.replace("dl=0", "raw=1");
        // If it's a standard link without params, append ?raw=1
        return url.includes("?") ? url + "&raw=1" : url + "?raw=1";
    };

    const directSrc = getDirectLink(src);

    return (
        <div className="video-container" style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '4px', overflow: 'hidden' }}>
            <video
                ref={videoRef}
                src={directSrc}
                poster={poster}
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
}
