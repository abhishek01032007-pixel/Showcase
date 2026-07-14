"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const dates = {
  Anniversary: "2027-02-14T00:00:00",
  Birthday: "2027-07-23T00:00:00",
  "Special date": "2027-11-11T06:00:00",
};

type DateName = keyof typeof dates;
type RemainingTime = Record<"Days" | "Hours" | "Minutes" | "Seconds", number>;

function getRemaining(target: string) {
  const difference = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    Days: Math.floor(difference / 86_400_000),
    Hours: Math.floor((difference / 3_600_000) % 24),
    Minutes: Math.floor((difference / 60_000) % 60),
    Seconds: Math.floor((difference / 1_000) % 60),
  };
}

export function Countdown() {
  const [selected, setSelected] = useState<DateName>("Anniversary");
  const [remaining, setRemaining] = useState<RemainingTime | null>(null);
  const target = useMemo(() => dates[selected], [selected]);

  useEffect(() => {
    setRemaining(getRemaining(target));
    const timer = window.setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const countdown = remaining ?? { Days: null, Hours: null, Minutes: null, Seconds: null };

  return (
    <section className="countdown-section section-shell" id="countdown">
      <div className="section-kicker">OUR NEXT BEAUTIFUL MOMENT</div>
      <h2>Counting every second<br />until we celebrate again.</h2>
      <div className="countdown-tabs">{(Object.keys(dates) as DateName[]).map((name) => <button key={name} className={selected === name ? "active" : ""} onClick={() => setSelected(name)}>{name}</button>)}</div>
      <div className="countdown-grid">
        {Object.entries(countdown).map(([label, value]) => (
          <div className="countdown-unit" key={label}><AnimatePresence mode="popLayout"><motion.strong key={value ?? `${label}-pending`} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>{value === null ? "--" : String(value).padStart(2, "0")}</motion.strong></AnimatePresence><span>{label}</span></div>
        ))}
      </div>
      <p className="editable-note">Dates are sample content and can be changed for every customer.</p>
    </section>
  );
}
