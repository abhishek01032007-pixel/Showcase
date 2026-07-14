"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "About & Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Aarav Mehta home">AM<span>©26</span></Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-navigation" className={open ? "nav-open" : ""} aria-label="Main navigation">
        {nav.map((item) => <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="availability" href="/contact#contact-form"><i />Available for select projects</Link>
    </header>
  );
}
