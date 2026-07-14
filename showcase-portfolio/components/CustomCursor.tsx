"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const node = cursor.current;
    if (!node) return;

    const move = (event: PointerEvent) => {
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      node.classList.toggle("cursor-active", Boolean(target.closest("a, button, summary")));
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
}
