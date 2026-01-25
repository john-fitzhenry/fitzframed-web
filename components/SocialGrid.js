"use client";
import React from 'react';

// Placeholder "Curated" Posts - linking to Instagram profile
const posts = [
    { id: 1, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80" }, // iPhone/Social
    { id: 2, img: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&q=80" }, // Concert
    { id: 3, img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400&q=80" }, // Camera
    { id: 4, img: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=400&q=80" }  // Lens
];

export default function SocialGrid() {
    return (
        <div className="container" style={{ paddingTop: '4rem', borderTop: '1px solid #222' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>@FitzFramed</h3>
                <a href="https://www.instagram.com/FitzFramed" target="_blank" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}>Follow</a>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem'
            }}>
                {posts.map((post) => (
                    <a key={post.id} href="https://www.instagram.com/FitzFramed" target="_blank" style={{ display: 'block', position: 'relative', paddingTop: '100%', overflow: 'hidden', background: '#222' }}>
                        <img
                            src={post.img}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }}
                            className="social-img"
                        />
                        <div style={{
                            position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            opacity: 0, transition: 'opacity 0.3s'
                        }} className="hover-overlay">
                            <span style={{ fontSize: '1.5rem' }}>↗</span>
                        </div>
                    </a>
                ))}
            </div>
            <style jsx>{`
        .social-img:hover { opacity: 0.8; }
        a:hover .hover-overlay { opacity: 1; }
        @media (max-width: 768px) {
            div[style*="grid-template-columns"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </div>
    );
}
