"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/content";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { memories } from "@/data/content";

export function RelationshipTimeline() {
  return (
    <section className="timeline-section section-shell" id="timeline">
      <div className="timeline-heading"><p className="section-kicker">OUR STORY, IN MILESTONES</p><h2>From one hello<br />to all our tomorrows.</h2></div>
      <div className="timeline-list">
        <motion.div className="timeline-progress" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: .1 }} transition={{ duration: 1.8, ease: "easeOut" }} />
        {timeline.map(([date, title, description], index) => <motion.article key={title} initial={{ opacity: 0, x: index % 2 ? 35 : -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65 }}><div className="timeline-date">{date}</div><i>{String(index + 1).padStart(2, "0")}</i><div className="timeline-card glass-card"><span>{index === timeline.length - 1 ? "CONTINUING" : "MILESTONE"}</span><h3>{title}</h3><p>{description}</p>{index === 4 && <PhotoPlaceholder memory={memories[10]} compact />}</div></motion.article>)}
      </div>
    </section>
  );
}
