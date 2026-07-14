import Link from "next/link";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Reveal } from "@/components/Reveal";
import { capabilities, profile } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">{profile.role} · {profile.location}</p>
          <h1>Ideas made <em>useful.</em><br />Experiences made <span>memorable.</span></h1>
          <div className="hero-bottom"><p>{profile.intro}</p><Link className="primary-link" href="/work">Explore selected work <span>↘</span></Link></div>
        </div>
        <div className="hero-identity" aria-hidden="true"><div className="identity-orbit"><span>AM</span><i>DESIGN / CODE / DIRECTION</i></div><p>Aarav Mehta<br /><span>Independent creative</span></p></div>
        <a className="scroll-marker" href="#featured-work"><i />Scroll to discover</a>
      </section>

      <div className="service-marquee" aria-label="Capabilities"><div>PRODUCT DESIGN ✦ CREATIVE DEVELOPMENT ✦ BRAND DIRECTION ✦ PRODUCT DESIGN ✦ CREATIVE DEVELOPMENT ✦ BRAND DIRECTION ✦</div></div>

      <FeaturedProjects />

      <section className="home-about section-dark">
        <div className="section-shell about-layout">
          <Reveal><p className="eyebrow">02 / APPROACH</p></Reveal>
          <div>
            <Reveal><h2>Clarity before decoration.<br /><em>Emotion before attention.</em></h2></Reveal>
            <Reveal className="about-statement"><p>{profile.about}</p><Link className="text-link light-link" href="/contact">More about my approach <span>↗</span></Link></Reveal>
            <Reveal className="stats-row"><div><strong>07+</strong><span>Years creating</span></div><div><strong>38</strong><span>Projects shipped</span></div><div><strong>12</strong><span>Product launches</span></div><div><strong>09</strong><span>Long-term partners</span></div></Reveal>
          </div>
        </div>
      </section>

      <section className="capabilities section-dark">
        <div className="section-shell">
          <Reveal><p className="eyebrow">03 / CAPABILITIES</p></Reveal>
          <div className="capability-list">
            {capabilities.map((item) => <Reveal className="capability-row" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p><b>↗</b></Reveal>)}
          </div>
        </div>
      </section>

      <section className="home-cta"><Reveal><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make something<br /><em>worth remembering.</em></h2><Link href="/contact#contact-form">Start a conversation <span>↗</span></Link></Reveal></section>
    </main>
  );
}
