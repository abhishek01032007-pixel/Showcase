"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { memories } from "@/data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type Memory = (typeof memories)[number];

function RepellingMemory({ memory, index }: { memory: Memory; index: number }) {
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 18, mass: 0.7 });
  const y = useSpring(rawY, { stiffness: 180, damping: 18, mass: 0.7 });

  function moveAway(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = rect.left + rect.width / 2 - event.clientX;
    const dy = rect.top + rect.height / 2 - event.clientY;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    rawX.set((dx / distance) * 34);
    rawY.set((dy / distance) * 24);
  }

  function reset() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.article
      className={`drifting-memory drifting-memory--${index % 4}`}
      initial={reduceMotion ? false : { opacity: 0, y: -110 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 1.15, delay: Math.min(index * 0.055, 0.42), ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="drifting-memory__surface"
        style={{ x, y }}
        onPointerMove={moveAway}
        onPointerLeave={reset}
        onPointerCancel={reset}
      >
        <PhotoPlaceholder label={`Photo ${memory.id}`} compact />
        <div className="drifting-memory__copy">
          <span>{memory.date}</span>
          <h3>{memory.title}</h3>
          <p>{memory.description}</p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function DriftingMemories() {
  return (
    <section className="drifting-memories" aria-labelledby="drifting-memories-title">
      <div className="drifting-memories__intro">
        <p>MEMORIES 06—20</p>
        <h3 id="drifting-memories-title">The moments keep<br />falling into place.</h3>
        <span>Move your cursor through the photographs.</span>
      </div>
      <div className="drifting-memories__rail">
        {memories.slice(5).map((memory, index) => (
          <RepellingMemory key={memory.id} memory={memory} index={index} />
        ))}
      </div>
    </section>
  );
}
