"use client";
import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGrid.css';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
};

// Real Content from User Dump (Videos)
// Using reliable Unsplash IDs or Placehold.co for stability
const items = [
    { id: 1, title: 'T.3 "Let It Go"', category: 'Music Video / Viral', img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80', videoUrl: 'https://youtu.be/n01ktYsTnK8?si=XKx9G5v7PgieyW2x' },
    { id: 2, title: 'Little Women (FPAC)', category: 'Theatrical Promo', img: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&q=80', videoUrl: 'https://vimeo.com/1006305814' },
    { id: 3, title: 'Tom Abbott "Time"', category: 'Official Music Video', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80', videoUrl: 'https://www.youtube.com/watch?v=wNVqyvpfMlc' },
    { id: 4, title: 'Ocean State Star Awards', category: 'Event Recap', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', videoUrl: 'https://youtu.be/X4lCg2iEqG0?si=EcKjpcIsvBzh9npP' },
    { id: 5, title: 'Discover FSPA', category: 'Brand Documentary', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', videoUrl: 'https://www.youtube.com/@FitzFramed' },
    { id: 6, title: 'Talk Talk Boom!', category: 'Podcast / Original', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80', videoUrl: 'https://www.youtube.com/@FitzFramed' },
];

export default function MasonryGrid() {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
        >
            {items.map((item) => (
                <a key={item.id} href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-item" style={{ display: 'block' }}>
                    <img src={item.img} alt={item.title} style={{ height: 'auto' }} />
                    <div className="overlay">
                        <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase' }}>View Project ↗</div>
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
                    </div>
                </a>
            ))}
        </Masonry>
    );
}
