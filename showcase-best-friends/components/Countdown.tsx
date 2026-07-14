"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";

type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const target = useMemo(() => new Date(new Date().getFullYear() + 1, 2, 3, 9, 0, 0), []);
  const [time, setTime] = useState<RemainingTime | null>(null);

  useEffect(() => {
    setTime(getRemaining(target));
    const timer = window.setInterval(() => setTime(getRemaining(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const countdown = time ?? { days: null, hours: null, minutes: null, seconds: null };

  return (
    <section className="countdown-section section-shell" id="countdown">
      <Reveal className="section-title centered">
        <p>COUNTDOWN</p>
        <h2>To our next crazy memory</h2>
      </Reveal>
      <div className="countdown-grid">
        {Object.entries(countdown).map(([label, value]) => (
          <Reveal className="count-card" key={label}>
            <strong>{value === null ? "--" : String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
