"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { besties, bucketList, jokes, memories, profiles, timeline } from "@/data/content";
import { Countdown } from "./Countdown";
import { DriftingMemories } from "./DriftingMemories";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";
import { Surprise } from "./Surprise";
import { VideoMemory } from "./VideoMemory";

const stickers = ["NO BORING DAYS", "CORE MEMORY", "BESTIE ENERGY", "CHAOS CLUB"];

export function BestFriendsExperience() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, 90]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && <div className="loader"><span>BF</span><p>Loading friendship story</p></div>}
      <header className="site-header">
        <a href="#home" className="brand">Besties<span>Since 2019</span></a>
        <nav>
          <a href="#story">Story</a>
          <a href="#memories">Memories</a>
          <a href="#timeline">Timeline</a>
          <a href="#video">Video</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="floating-stickers" aria-hidden="true">
            {stickers.map((sticker, index) => <i key={sticker} className={`sticker sticker-${index + 1}`}>{sticker}</i>)}
          </div>
          <motion.div className="hero-content" style={{ y: heroY }} initial={{ opacity: 0 }} animate={{ opacity: loaded ? 1 : 0 }} transition={{ duration: 0.8 }}>
            <p>{besties.since}</p>
            <h1>{besties.one} <span>&</span> {besties.two}</h1>
            <h2>{besties.subtitle}</h2>
            <a href="#story">Start the friendship story</a>
          </motion.div>
          <a className="scroll-cue" href="#story"><span />Scroll</a>
        </section>

        <section className="letter-section section-shell" id="story">
          <Reveal className="friendship-letter">
            <p>FRIENDSHIP LETTER</p>
            <h2>Some people become friends. Some become family.</h2>
            <span>This website is for every laugh, every silly fight, every late-night conversation, and every memory that made this friendship unforgettable.</span>
            <strong>Always your favorite chaos partner</strong>
          </Reveal>
        </section>

        <section className="profiles-section section-shell">
          <Reveal className="section-title">
            <p>MEET THE BESTIES</p>
            <h2>Two personalities. One shared language.</h2>
          </Reveal>
          <div className="profile-grid">
            {profiles.map((profile) => (
              <Reveal className="profile-card" key={profile.name}>
                <span>{profile.role}</span>
                <h3>{profile.name}</h3>
                <p>{profile.tag}</p>
                <small>{profile.detail}</small>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="memories-section" id="memories">
          <div className="section-shell">
            <Reveal className="section-title light">
              <p>20 PHOTO MEMORIES</p>
              <h2>Every photo has a story only we understand.</h2>
            </Reveal>
            <Reveal className="featured-memory memory-card">
              <PhotoPlaceholder label="Photo 1" />
              <div><span>{memories[0].date}</span><h3>{memories[0].title}</h3><p>{memories[0].description}</p></div>
            </Reveal>
            <div className="split-memories">
              {memories.slice(1, 5).map((memory, index) => (
                <Reveal className={`split-memory ${index % 2 ? "reverse" : ""}`} key={memory.id}>
                  <PhotoPlaceholder label={`Photo ${memory.id}`} />
                  <div><span>{memory.date}</span><h3>{memory.title}</h3><p>{memory.description}</p></div>
                </Reveal>
              ))}
            </div>
            <DriftingMemories />
          </div>
        </section>

        <section className="timeline-section section-shell" id="timeline">
          <Reveal className="section-title centered">
            <p>FRIENDSHIP TIMELINE</p>
            <h2>From first hello to forever stories.</h2>
          </Reveal>
          <div className="timeline-list">
            {timeline.map(([date, title, description], index) => (
              <Reveal className="timeline-item" key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{date}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="jokes-section section-shell">
          <Reveal className="section-title">
            <p>INSIDE JOKES</p>
            <h2>The tiny things nobody else gets.</h2>
          </Reveal>
          <div className="joke-grid">
            {jokes.map(([front, back]) => (
              <Reveal className="flip-card" key={front}>
                <div><h3>{front}</h3><p>{back}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <VideoMemory />
        <Countdown />

        <section className="bucket-section section-shell">
          <Reveal className="section-title">
            <p>BUCKET LIST</p>
            <h2>Still waiting on these stories.</h2>
          </Reveal>
          <div className="bucket-grid">
            {bucketList.map((item, index) => (
              <Reveal className="bucket-item" key={item}>
                <i>{index < 3 ? "✓" : "+"}</i>
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="stats-section section-shell">
          {[
            ["6+", "Years together"],
            ["420", "Photos saved"],
            ["99", "Inside jokes"],
            ["87", "Long calls"],
            ["12", "Trips planned"],
            ["∞", "Memories made"],
          ].map(([value, label]) => (
            <Reveal className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></Reveal>
          ))}
        </section>

        <Surprise />

        <section className="finale-section">
          <Reveal>
            <p>FOREVER THE FAVORITE CHAPTER</p>
            <h2>Not just friends.<br />Family by choice.</h2>
            <a href="#home">Replay memories</a>
            <a style={{ marginLeft: 12 }} href="https://memorlume.vercel.app/" target="_blank" rel="noreferrer">Create a story like this</a>
          </Reveal>
        </section>
      </main>
      <footer><span>Premium Best Friend Template</span><span>Designed by Pixel Memories</span></footer>
    </>
  );
}
