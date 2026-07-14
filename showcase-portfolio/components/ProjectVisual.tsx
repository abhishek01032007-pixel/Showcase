import type { Project } from "@/data/portfolio";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual ${project.visual} ${compact ? "visual-compact" : ""}`} aria-hidden="true">
      <span className="visual-index">0{project.id}</span>
      <div className="visual-mark">{project.mark}</div>
      <span className="visual-tag">{project.category} / {project.year}</span>
    </div>
  );
}
