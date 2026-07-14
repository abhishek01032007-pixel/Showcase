import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata: Metadata = { title: "Selected Work", description: "Eight selected product, website and identity projects by Aarav Mehta." };

export default function WorkPage() {
  return (
    <main id="main-content" className="work-page">
      <section className="page-hero work-hero">
        <p className="eyebrow">01 / SELECTED WORK / 2024—2026</p>
        <h1>Eight projects.<br /><em>Eight clear outcomes.</em></h1>
        <p className="page-intro">Product experiences, expressive websites and identity systems—each shaped around a real problem, a strong idea and useful results.</p>
      </section>
      <section className="work-browser section-light"><div className="section-shell"><ProjectExplorer /></div></section>
    </main>
  );
}
