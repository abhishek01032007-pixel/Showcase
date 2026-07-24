"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { couple } from "@/data/content";
import { Countdown } from "./Countdown";
import { ThemeToggle } from "./Controls";
import { PhotoStories } from "./PhotoStories";
import { RelationshipTimeline } from "./Timeline";
import { Reveal } from "./Reveal";
import { Surprise } from "./Surprise";
import { VideoMemory } from "./VideoMemory";

const hearts = Array.from({ length: 14 }, (_, index) => ({ id: index, left: (index * 29) % 96, delay: (index % 7) * .65, size: 8 + (index % 5) * 3 }));

export function LovedOneExperience() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .15], [0, 90]);

  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 850); return () => window.clearTimeout(timer); }, []);

  return (
    <>
      <AnimatePresence>{!loaded && <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: .6 }}><motion.span animate={{ scale: [1, 1.18, 1] }} transition={{ repeat: Infinity, duration: 1 }}>♥</motion.span><p>Preparing our story</p></motion.div>}</AnimatePresence>
      <header className="site-header"><a className="monogram" href="#home">A <span>♥</span> R</a><nav><a href="#letter">Letter</a><a href="#memories">Memories</a><a href="#timeline">Timeline</a></nav><div className="header-actions"><ThemeToggle /></div></header>
      <main>
        <section className="hero-section" id="home">
          <div className="aurora" /><div className="floating-hearts" aria-hidden="true">{hearts.map((heart) => <i key={heart.id} style={{ left: `${heart.left}%`, animationDelay: `${heart.delay}s`, fontSize: heart.size }}>♥</i>)}</div>
          <motion.div className="hero-content" style={{ y: heroY }} initial={{ opacity: 0 }} animate={{ opacity: loaded ? 1 : 0 }} transition={{ duration: 1 }}><p className="hero-kicker">{couple.since}</p><h1>{couple.personOne}<span>&</span>{couple.personTwo}</h1><p className="hero-subtitle">{couple.subtitle}</p><a className="journey-button" href="#letter">Start Our Journey <span>↓</span></a></motion.div>
          <a className="scroll-indicator" href="#letter"><i /><span>Scroll to begin</span></a>
        </section>

        <section className="letter-section section-shell" id="letter"><Reveal className="letter-card glass-card"><div className="letter-orbit" /><p className="section-kicker">A LETTER FROM MY HEART</p><h2>To the person who made<br />ordinary life feel magical,</h2><p className="typewriter-letter">You arrived without noise, and somehow changed the sound of everything. With you, the smallest moments became the ones I wanted to keep forever. Thank you for being my safest place, my greatest adventure, and the person I still cannot wait to tell everything to.</p><p>No matter how many chapters we write, I promise to keep choosing you—with patience, laughter, and all the love I have.</p><div className="signature">Forever yours, <strong>Aarav</strong></div></Reveal></section>

        <PhotoStories />
        <RelationshipTimeline />
        <VideoMemory />
        <Countdown />
        <Surprise />

        <section className="ending-section"><div className="aurora aurora--ending"/><div className="stars" aria-hidden="true">{hearts.slice(0, 9).map((heart) => <i key={heart.id} style={{ left: `${heart.left}%`, animationDelay: `${heart.delay}s` }}>✦</i>)}</div><Reveal><p>AND IN EVERY UNIVERSE</p><h2>Forever & Always <span>❤️</span></h2><p className="ending-copy">The best part of our story is that it is still being written.</p><a href="#home">Experience it again ↑</a><a style={{ marginLeft: 12 }} href="https://memorlume.vercel.app/" target="_blank" rel="noreferrer">Create a story like this</a></Reveal></section>
      </main>
      <footer><span>Premium Loved One Template</span><span>Designed by Pixel Memories</span></footer>
    </>
  );
}
