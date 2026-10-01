"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun } from "lucide-react";
import { profile } from "@/lib/data";
import Whatsapp from "./Whatsapp";

const links = ["home", "about", "experience", "projects", "services", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const icon = "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[72px] max-w-6xl items-center gap-4 px-5" aria-label="Primary">
        <a href="#home">
          <p className="font-serif text-xl tracking-tight">{profile.name}</p>
          <p className="text-xs uppercase tracking-[2px]">{profile.subtitle}</p>
        </a>
        <button aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface md:hidden">
          <Menu size={18} />
        </button>
        <div className={`${open ? "flex" : "hidden"} fixed inset-x-3 top-20 flex-col gap-3 rounded-2xl border border-border bg-surface p-4 md:static md:ml-8 md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:border-0 md:bg-transparent md:p-0`}>
          <div className="grid gap-2 md:flex md:items-center md:gap-6">
            {links.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                className={`relative px-3 py-2 text-sm font-medium capitalize transition md:px-0 md:py-1 ${active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {id}
                {active === id && <span className="absolute -bottom-1 left-0 hidden h-0.5 w-full bg-[rgb(var(--accent))] md:block" />}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={icon}><Github color="rgb(var(--accent))" size={16} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={icon}><Linkedin color="rgb(var(--accent))" size={16} /></a>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={icon}><Whatsapp /></a>
            <button aria-label="Toggle theme" onClick={toggleTheme} className={icon}>{dark ? <Sun color="rgb(var(--accent))" size={16} /> : <Moon color="rgb(var(--accent))" size={16} />}</button>
            <a href={profile.resume} target="_blank" className="ml-1 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition hover:bg-foreground hover:bg-[rgb(var(--accent))] hover:text-background">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
