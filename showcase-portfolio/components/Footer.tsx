import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Aarav Mehta</p>
      <p>Premium portfolio showcase by <a href="https://memorlume.vercel.app/" target="_blank" rel="noreferrer">Memorlume</a></p>
      <div><Link href="/work">Work</Link><Link href="/contact">Contact</Link><a href="https://memorlume.vercel.app/" target="_blank" rel="noreferrer">Create yours</a></div>
    </footer>
  );
}
