"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function NavBar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [glass, setGlass] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        // Hide if scrolling down and past 100px
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Glass effect active when not at absolute top
        if (latest > 50) {
            setGlass(true);
        } else {
            setGlass(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: glass ? 'rgba(10, 10, 10, 0.7)' : 'transparent',
                backdropFilter: glass ? 'blur(10px)' : 'none',
                borderBottom: glass ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'background 0.3s, backdrop-filter 0.3s'
            }}
        >
            <div style={{ fontWeight: 700, letterSpacing: '-0.02em', fontSize: '1.25rem', fontFamily: 'var(--font-playfair)' }}>
                FITZ FRAMED
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <li><a href="/" style={{ opacity: 0.7 }}>Film</a></li>
                <li><a href="/photography" style={{ opacity: 0.7 }}>Photography</a></li>
                <li><a href="/#contact" style={{ opacity: 0.7 }}>Contact</a></li>
            </ul>
        </motion.nav>
    );
}
