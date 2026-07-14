"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function VideoMemory() {
  const [selected, setSelected] = useState(1);
  return (
    <section className="video-section section-shell" id="video">
      <div className="video-heading"><div><p className="section-kicker">OUR STORY IN MOTION</p><h2>Some memories<br />deserve to move.</h2></div><p>Premium video placement with a cinematic player and supporting thumbnail slots. Customer videos replace these placeholders.</p></div>
      <div className="featured-video glass-card"><div className="video-placeholder"><span>Featured Video Placeholder</span><small>Replace with customer video</small></div><motion.button className="play-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: .94 }} aria-label="Play video placeholder">▶</motion.button><div className="video-caption"><span>FILM 0{selected}</span><h3>{selected === 1 ? "A year of us" : selected === 2 ? "Our favorite trip" : "Birthday together"}</h3></div></div>
      <div className="video-thumbnails">{[1, 2, 3].map((number) => <button key={number} className={selected === number ? "active" : ""} onClick={() => setSelected(number)}><div><span>Video {number}</span><i>▶</i></div><p>{number === 1 ? "A year of us" : number === 2 ? "Our favorite trip" : "Birthday together"}</p></button>)}</div>
    </section>
  );
}
