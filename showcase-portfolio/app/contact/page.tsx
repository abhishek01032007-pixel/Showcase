import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { experience, profile, skills } from "@/data/portfolio";

export const metadata: Metadata = { title: "About & Contact", description: "About Aarav Mehta, experience, capabilities and project enquiry form." };

const resumeText = "data:text/plain;charset=utf-8,AARAV%20MEHTA%0ACreative%20Developer%20%26%20Product%20Designer%0ABengaluru%2C%20India%0A%0AThis%20is%20a%20downloadable%20resume%20placeholder%20for%20the%20Pixel%20Memories%20Premium%20Portfolio%20showcase.";

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="page-hero about-hero">
        <p className="eyebrow">ABOUT / AARAV MEHTA</p>
        <h1>A designer who codes.<br />A developer who <em>cares why.</em></h1>
        <div className="about-intro"><p>{profile.about} I believe the best digital work feels inevitable: clear in purpose, distinct in character and carefully made.</p><a className="primary-link" href={resumeText} download="Aarav-Mehta-Resume.txt">Download résumé <span>↓</span></a></div>
      </section>

      <section className="experience-section section-light">
        <div className="section-shell two-column-title"><Reveal><p className="eyebrow">01 / EXPERIENCE</p></Reveal><div className="experience-list">{experience.map((item) => <Reveal className="experience-row" key={item.years}><span>{item.years}</span><div><h2>{item.role}</h2><strong>{item.place}</strong><p>{item.detail}</p></div></Reveal>)}</div></div>
      </section>

      <section className="skills-section section-dark">
        <div className="section-shell two-column-title"><Reveal><p className="eyebrow">02 / TOOLS & STRENGTHS</p></Reveal><Reveal className="skills-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</Reveal></div>
      </section>

      <section className="contact-section section-blue">
        <div className="section-shell contact-layout">
          <Reveal className="contact-copy"><p className="eyebrow">03 / START A PROJECT</p><h2>Good work starts with a clear conversation.</h2><p>Share what you are building, where you are stuck or what you want to make possible.</p><a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble</a></div></Reveal>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>
    </main>
  );
}
