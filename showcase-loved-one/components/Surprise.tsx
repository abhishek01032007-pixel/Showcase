"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export function Surprise() {
  const [open, setOpen] = useState(false);
  const pieces = useMemo(() => Array.from({ length: 48 }, (_, index) => ({ id: index, left: (index * 37) % 100, delay: (index % 9) * 0.05, symbol: index % 3 === 0 ? "♥" : index % 3 === 1 ? "✦" : "●" })), []);

  return (
    <section className="surprise-section section-shell">
      <p className="section-kicker">ONE MORE THING</p><h2>A little secret is<br />waiting for you.</h2>
      <motion.button className="surprise-button" onClick={() => setOpen(true)} whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.97 }}>Open Your Surprise <span>❤️</span></motion.button>
      <AnimatePresence>
        {open && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <div className="confetti-field" aria-hidden="true">{pieces.map((piece) => <i key={piece.id} style={{ left: `${piece.left}%`, animationDelay: `${piece.delay}s` }}>{piece.symbol}</i>)}</div>
            <motion.div className="surprise-modal" initial={{ opacity: 0, scale: 0.82, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", stiffness: 180, damping: 20 }} onClick={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close surprise">×</button><span className="modal-heart">♥</span><p>MY FAVORITE PERSON</p><h3>The real surprise is this:</h3><blockquote>Every future I imagine has you in it. Not only for the extraordinary days—but for every quiet morning, every brave beginning, and every ordinary moment in between.</blockquote><strong>Forever yours, Aarav</strong>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
