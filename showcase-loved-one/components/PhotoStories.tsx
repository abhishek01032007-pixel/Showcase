"use client";

import { motion } from "framer-motion";
import { memories } from "@/data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";

function MemoryCopy({ memory, number }: { memory: (typeof memories)[number]; number: number }) {
  return <div className="memory-copy"><span>{String(number).padStart(2, "0")} · {memory.date}</span><h3>{memory.title}</h3><p>{memory.description}</p></div>;
}

export function PhotoStories() {
  const [featureOne] = memories;
  const split = memories.slice(1, 3);
  const polaroids = memories.slice(3, 8);
  const masonry = memories.slice(8, 13);
  const floating = memories.slice(13, 16);
  const last = memories.slice(16);

  return (
    <section id="memories" className="memories-section">
      <div className="section-shell memories-intro"><Reveal><p className="section-kicker">20 CURATED PHOTO MOMENTS</p><h2>Every photograph<br />holds a whole world.</h2></Reveal><Reveal><p className="section-intro">This premium layout supports up to 20 customer photos, presented through varied editorial compositions instead of a repetitive gallery.</p></Reveal></div>

      <Reveal className="feature-memory section-shell"><PhotoPlaceholder memory={featureOne} /><MemoryCopy memory={featureOne} number={1} /></Reveal>

      <div className="split-stories section-shell">{split.map((memory, index) => <Reveal className={`split-memory ${index % 2 ? "reverse" : ""}`} key={memory.id}><PhotoPlaceholder memory={memory} /><MemoryCopy memory={memory} number={memory.id} /></Reveal>)}</div>

      <div className="polaroid-stage"><div className="section-shell"><Reveal><p className="section-kicker">LITTLE FRAMES · BIG FEELINGS</p><h2>The beautifully<br />unplanned moments.</h2></Reveal><div className="polaroid-grid">{polaroids.map((memory, index) => <motion.article className="polaroid" key={memory.id} initial={{ opacity: 0, rotate: 0, y: 35 }} whileInView={{ opacity: 1, rotate: [-2, 2, -1, 1, 0][index], y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }} whileHover={{ rotate: 0, y: -12, scale: 1.025 }}><PhotoPlaceholder memory={memory} compact /><MemoryCopy memory={memory} number={memory.id} /></motion.article>)}</div></div></div>

      <div className="masonry-stage section-shell"><Reveal><p className="section-kicker">A COLLAGE OF US</p><h2>Love lives in<br />the in-between.</h2></Reveal><div className="masonry-grid">{masonry.map((memory) => <motion.article className="masonry-card" key={memory.id} whileHover={{ y: -8 }}><PhotoPlaceholder memory={memory} compact /><MemoryCopy memory={memory} number={memory.id} /></motion.article>)}</div></div>

      <div className="parallax-memory"><motion.div className="parallax-placeholder" initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ amount: .2 }} transition={{ duration: 1.4 }}><PhotoPlaceholder memory={floating[0]} /></motion.div><div className="parallax-copy glass-card"><MemoryCopy memory={floating[0]} number={floating[0].id} /></div></div>

      <div className="floating-stage section-shell">{floating.slice(1).map((memory, index) => <motion.article className={`floating-memory floating-memory--${index + 1}`} key={memory.id} animate={{ y: [0, index ? 12 : -12, 0] }} transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}><PhotoPlaceholder memory={memory} compact /><MemoryCopy memory={memory} number={memory.id} /></motion.article>)}</div>

      <div className="final-photo-grid section-shell">{last.map((memory, index) => <Reveal className={`final-photo final-photo--${index + 1}`} key={memory.id}><PhotoPlaceholder memory={memory} compact /><MemoryCopy memory={memory} number={memory.id} /></Reveal>)}</div>
    </section>
  );
}
