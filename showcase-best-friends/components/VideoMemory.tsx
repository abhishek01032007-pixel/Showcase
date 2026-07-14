import { Reveal } from "./Reveal";

export function VideoMemory() {
  return (
    <section className="video-section section-shell" id="video">
      <Reveal className="video-copy">
        <p>VIDEO MEMORY</p>
        <h2>The moment that deserves motion.</h2>
        <span>Replace this placeholder with the customer video. If the video has sound, it plays through the video player.</span>
      </Reveal>
      <Reveal className="video-card">
        <div className="play-button">PLAY</div>
        <p>Featured video placeholder</p>
      </Reveal>
      <div className="video-thumbs">
        {[1, 2, 3].map((item) => (
          <Reveal className="thumb-card" key={item}>
            <span>Clip {item}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
