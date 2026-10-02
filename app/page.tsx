import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import * as d from "@/lib/data";
import { credibility } from "@/lib/data";
import Whatsapp from "@/components/Whatsapp";

const card = "rounded-2xl border border-border bg-surface p-5";
const chip = "rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground";

export default function Page() {
  const { profile } = d;
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 pb-12">
        {/* Hero */}
        <section id="home" className="grid min-h-[86vh] scroll-mt-28 items-center gap-10 py-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            {/* <h1 className="font-serif text-5xl !leading-[80px] tracking-normal md:text-7xl">{profile.headline}</h1> */}
            <h1 className="font-serif text-5xl !leading-[55px] tracking-normal md:text-7xl md:!leading-[80px]">{profile.headline}</h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg">{profile.tagline}</p>
            <a href="#projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95">
              View Projects <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="p-6 rounded-3xl border border-white">
            <div className="p-4 mb-6 rounded-2xl border border-white bg-surface">
              <p className="uppercase text-sm mb-2 font-bold">Performance Snapshot</p>
              <p className="text-sm text-muted-foreground">Key delivery indicators from recent engineering outcomes.</p>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white bg-surface p-6 sm:grid-cols-2">
              {d.stats.map((s) => (
                <article key={s.label} className="rounded-2xl border border-white bg-muted/40 p-4">
                  <p className="text-3xl font-semibold tracking-tight">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </article>
              ))}
            </div>
          </div>
          <div
            className="mt-20 relative overflow-hidden rounded-2xl border border-white bg-surface/70 py-4 md:col-span-2"
            aria-label="Engineering skills"
          >
            {/* Left fade/shadow */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-surface/100 to-transparent" />

            {/* Right fade/shadow */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-surface/100 to-transparent" />

            <div className="marquee">
              {[...d.marquee, ...d.marquee].map((m, i) => (
                <span
                  key={i}
                  className="mx-1 shrink-0 rounded-full border border-white bg-surface px-3 py-2 text-xs font-bold"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Section id="about" title="About" subtitle="I turn business requirements into scalable, user-focused systems that solve real problems, translating complex needs into simple, reliable solutions that deliver measurable outcomes.">
          <div className="grid gap-4 md:grid-cols-3">
            {d.about.map((a) => (
              <article key={a.title} className={card}>
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="A track record of engineering quality and delivery confidence.">
          <div className="grid gap-4">
            {d.experience.map((e) => (
              <article key={e.title} className={`${card} md:p-6`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-xl font-semibold"><Briefcase size={18} />{e.title}</h3>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[rgb(var(--accent))]">{e.company}</p>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  {e.points.map((p) => <li key={p} className="rounded-xl bg-muted/60 px-3 py-2">{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects" subtitle="Production applications focused on scalability, performance and real business impact.">
          <div className="grid gap-8 lg:grid-cols-2">
            {d.projects.map((p) => (
              <article key={p.title} className="rounded-[30px] border border-border bg-surface/90 p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{p.summary}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-muted/30 p-5">
                    <h4 className="mb-2 text-sm font-semibold">Business Impact</h4>
                    <p className="text-sm leading-6 text-muted-foreground">{p.impact}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/30 p-5">
                    <h4 className="mb-2 text-sm font-semibold">Challenge Solved</h4>
                    <p className="text-sm leading-6 text-muted-foreground">{p.challenge}</p>
                  </div>
                </div>
                <h4 className="mb-3 mt-7 text-sm font-semibold">Key Highlights</h4>
                <ul className="space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[rgb(var(--accent))]" />{h}
                    </li>
                  ))}
                </ul>
                <h4 className="mb-3 mt-7 text-sm font-semibold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className={chip}>{s}</span>)}</div>
                {p.link && (
                  <div className="mt-7 border-t border-border pt-6">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                      Live Project <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="services" title="Services" subtitle="Focused capabilities for product, platform and delivery teams.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.services.map((s) => (
              <article key={s.title} className={card}>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <section
          id="credibility"
          className="scroll-mt-28 py-12 md:py-16"
        >
          {/* Section Header */}
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgb(var(--accent))]">
              {credibility.eyebrow}
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {credibility.title}
            </h2>

            <p className="mt-3 max-w-5xl text-sm text-muted-foreground md:text-base">
              {credibility.description}
            </p>

            <div className="mt-5 h-px w-20 bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent-2))]" />
          </div>

          <div className="space-y-6">
            {/* Impact Highlights */}
            <article className="rounded-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgb(var(--accent))]">
                {credibility.impactTitle}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {credibility.impactSubtitle}
              </h3>

              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {credibility.impactHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border/70 px-4 py-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[rgb(var(--accent))]"
                    />

                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Engineering Stack */}
            <article className="rounded-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[rgb(var(--accent))]">
                {credibility.stackTitle}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {credibility.stackSubtitle}
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {credibility.skillGroups.map((group) => (
                  <section
                    key={group.title}
                    className="rounded-xl border border-border/70 p-4"
                  >
                    <h4 className="text-xs uppercase tracking-[0.12em] text-foreground font-bold">
                      {group.title}
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <img
                            src={skill.icon}
                            alt=""
                            className="h-5 w-5 object-contain me-2"
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <hr />

            {/* Delivery Tooling */}
            <article className="mt-6">
              <h4 className="text-xs !mb-4 font-semibold uppercase tracking-[0.12em] text-foreground">
                Delivery Tooling
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {credibility.skillGroups
                  .find((group) => group.title === "Tooling")
                  ?.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-full border border-border px-3 py-1.5 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <img
                        src={skill.icon}
                        alt=""
                        className="h-5 w-5 object-contain me-2"
                      />
                      {skill.name}
                    </span>
                  ))}
              </div>
            </article>
          </div>
        </section>

        <Section id="education" title="Education" subtitle="Foundational training in computer science and software engineering.">
          <div className="grid gap-5 md:grid-cols-2">
            {d.education.map((e) => (
              <article key={e.degree} className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-xs text-muted-foreground">{e.level}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                {/* <p className="mt-2 text-sm font-medium text-muted-foreground">{e.score}</p> */}
              </article>
            ))}
          </div>
        </Section>

        {/* <Section id="recommendation" title="Recommendation" subtitle="What colleagues and clients say about working together.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.recommendations.map((r) => (
              <article key={r.name} className={card}>
                <p className="text-sm leading-relaxed text-muted-foreground">“{r.quote}”</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                  <p className="mt-1 text-xs font-medium text-[rgb(var(--accent-2))]">{r.team}</p>
                </div>
              </article>
            ))}
          </div>
        </Section> */}

        <Section id="contact" title="Contact" subtitle="Open to collaboration on product engineering, UI modernization and performance work.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "GitHub", href: profile.github, Icon: Github },
              { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
              { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
              { label: "WhatsApp", href: profile.whatsapp, Icon: Whatsapp },
              { label: "Resume", href: profile.resume, Icon: Briefcase },
            ].map(({ label, href, Icon }) => (
              <a key={label} href={href} className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4 transition hover:-translate-y-1">
                <span className="text-sm font-medium">{label}</span>
                <Icon size={16} className="text-[rgb(var(--accent))]" />
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="mx-auto mb-6 max-w-6xl rounded-3xl border border-border bg-surface p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl">{profile.name}</p>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{profile.subtitle} crafting reliable digital experiences.</p>
          </div>
          <a href="#home" className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--accent))]">Back to top <ArrowUpRight size={15} /></a>
        </div>
        <hr className="my-3" />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </footer>
      <div className="pointer-events-none relative mt-4 overflow-hidden">
        <div className="relative mx-auto w-fit">
          <p aria-hidden="true" style={{
            backgroundImage:
              "linear-gradient(to bottom, rgb(var(--accent) / 0.42) 0%, rgb(var(--accent) / 0.24) 58%, rgb(var(--accent) / 0.1) 100%)",
            WebkitTextFillColor: "transparent",
          }} className="select-none bg-clip-text text-center font-serif text-[clamp(4.5rem,18vw,18rem)] leading-[0.85] tracking-tight text-transparent">
            KRISHAN
          </p>
        </div>
      </div>
    </div>
  );
}
