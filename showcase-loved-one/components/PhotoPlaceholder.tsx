import type { Memory } from "@/data/content";

export function PhotoPlaceholder({ memory, compact = false }: { memory: Memory; compact?: boolean }) {
  return (
    <div className={`photo-placeholder ${compact ? "photo-placeholder--compact" : ""}`} role="img" aria-label={`${memory.label} replacement area`}>
      <div className="placeholder-glow" />
      <div className="placeholder-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64"><path d="M11 48 25 32l9 10 7-7 12 13M19 23h.01" /></svg>
      </div>
      <span>{memory.label}</span>
      <small>Replace with your photo</small>
    </div>
  );
}
