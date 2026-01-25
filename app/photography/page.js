"use client";
import React from 'react';
import Masonry from 'react-masonry-css';
import { galleryItems, getDirectImageLink } from '@/data/gallery';
import NavBar from '@/components/NavBar';
import ScrollReveal from '@/components/ScrollReveal';
import '@/components/MasonryGrid.css'; // Reusing the grid styles

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

export default function Photography() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
            <NavBar />

            <section className="section container" style={{ paddingTop: '8rem' }}>
                <ScrollReveal>
                    <div className="text-center mb-4">
                        <span className="tagline">Stills</span>
                        <h1>Editorial Photography</h1>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                            Capturing the quiet moments between the chaos. A selection of portraits, events, and street photography.
                        </p>
                    </div>
                </ScrollReveal>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {galleryItems.map((item) => (
                        <div key={item.id} className="portfolio-item">
                            <img
                                src={getDirectImageLink(item.src)}
                                alt={item.title}
                                style={{ height: 'auto', width: '100%', display: 'block' }}
                            />
                            <div className="overlay">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </section>

            <footer className="section container text-center" style={{ padding: '2rem 0', color: '#555', fontSize: '0.875rem' }}>
                <a href="/" style={{ marginRight: '1rem' }}>← Return to Film</a>
                <span>&copy; {new Date().getFullYear()} Fitz Framed.</span>
            </footer>
        </main>
    );
}
