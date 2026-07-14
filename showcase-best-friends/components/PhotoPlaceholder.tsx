export function PhotoPlaceholder({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={`photo-placeholder ${compact ? "photo-placeholder--compact" : ""}`}>
      <span>{label}</span>
      <small>Replace with customer photo</small>
    </div>
  );
}
