export function CreatePortfolioCTA() {
  return (
    <section className="portfolio-create-cta" aria-labelledby="portfolio-create-title">
      <div className="portfolio-create-orbit" aria-hidden="true"><span>YOURS</span></div>
      <div className="portfolio-create-copy">
        <p className="eyebrow">YOUR WORK DESERVES A HOME</p>
        <h2 id="portfolio-create-title">Create a portfolio<br /><em>like this.</em></h2>
        <p>Turn your work, story, and personality into a portfolio that feels unmistakably yours.</p>
      </div>
      <a href="https://memorlume.vercel.app/" target="_blank" rel="noreferrer">
        <span>Build yours with Memorlume</span>
        <b aria-hidden="true">↗</b>
      </a>
    </section>
  );
}
