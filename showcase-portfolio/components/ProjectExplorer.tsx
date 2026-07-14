"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

const filters = ["All", "Product", "Web", "Brand"] as const;

export function ProjectExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", close);
    };
  }, [selected]);

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects">
        {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}
      </div>
      <motion.div layout className="work-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 15 }}
              transition={{ duration: 0.35 }}
              className="work-card"
            >
              <button onClick={() => setSelected(project)} aria-label={`Open ${project.title} case study`}>
                <ProjectVisual project={project} compact />
                <div className="work-card-copy"><span>0{project.id}</span><div><h2>{project.title}</h2><p>{project.summary}</p></div><b>View case study ↗</b></div>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="case-backdrop" role="dialog" aria-modal="true" aria-labelledby="case-title" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.article className="case-panel" initial={reducedMotion ? false : { x: "100%" }} animate={{ x: 0 }} exit={reducedMotion ? undefined : { x: "100%" }} transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}>
              <button className="case-close" onClick={() => setSelected(null)} aria-label="Close case study">Close ×</button>
              <ProjectVisual project={selected} compact />
              <div className="case-content">
                <p className="eyebrow">0{selected.id} / {selected.category} / {selected.year}</p>
                <h2 id="case-title">{selected.title}</h2>
                <p className="case-lead">{selected.summary}</p>
                <div className="service-chips">{selected.services.map((service) => <span key={service}>{service}</span>)}</div>
                <div className="case-facts"><div><span>Challenge</span><p>{selected.challenge}</p></div><div><span>Solution</span><p>{selected.solution}</p></div><div><span>Result</span><p>{selected.result}</p></div></div>
                <div className="case-actions"><a href="#" onClick={(event) => event.preventDefault()}>Live project <span>↗</span></a><a href="#" onClick={(event) => event.preventDefault()}>Project source <span>↗</span></a></div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
