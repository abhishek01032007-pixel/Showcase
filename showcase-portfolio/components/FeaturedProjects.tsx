import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";

export function FeaturedProjects() {
  return (
    <section className="featured section-light" id="featured-work">
      <div className="section-shell">
        <Reveal className="section-heading split-heading">
          <p className="eyebrow">01 / SELECTED WORK</p>
          <div><h2>Projects with purpose,<br />personality and precision.</h2><p>Selected product, web and identity work built around a clear idea and a measurable outcome.</p></div>
        </Reveal>
        <div className="featured-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal className={`featured-card feature-${index + 1}`} key={project.id} delay={index * 0.06}>
              <Link href="/work" aria-label={`Explore ${project.title} case study`}>
                <ProjectVisual project={project} />
                <div className="project-meta"><span>0{project.id}</span><div><h3>{project.title}</h3><p>{project.services.join(" · ")}</p></div><b>↗</b></div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="view-all-wrap"><Link className="text-link" href="/work">View all eight projects <span>↗</span></Link></Reveal>
      </div>
    </section>
  );
}
