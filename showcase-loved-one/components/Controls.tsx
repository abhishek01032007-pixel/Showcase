"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("love-theme");
    const nextDark = saved !== "light";
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("love-theme", next ? "dark" : "light");
  };

  return <button className="icon-control" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? "☼" : "☾"}</button>;
}
