"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";

const burst = Array.from({ length: 28 }, (_, index) => index);

export function Surprise() {
  const [open, setOpen] = useState(false);

  return (
    <section className="surprise-section">
      <Reveal className="surprise-content">
        <p>SECRET MESSAGE</p>
        <h2>Open Bestie Surprise</h2>
        <button onClick={() => setOpen(true)}>Open Bestie Surprise</button>
      </Reveal>
      <AnimatePresence>
        {open && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="confetti" aria-hidden="true">{burst.map((item) => <i key={item} style={{ left: `${(item * 37) % 100}%`, animationDelay: `${(item % 8) * 0.08}s` }} />)}</div>
            <motion.div className="surprise-modal" initial={{ scale: 0.88, y: 28, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}>
              <button className="close" onClick={() => setOpen(false)} aria-label="Close surprise">Close</button>
              <span>BESTIE NOTE</span>
              <h3>No matter where life takes us, you will always be my favorite chapter of chaos, laughter, and loyalty.</h3>
              <p>Not just friends. Family by choice.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
