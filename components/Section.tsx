export default function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-12 md:py-16">
      <div className="mb-7">
        <h2 className="text-3xl font-serif font-semibold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p>
        <div className="mt-5 h-px w-20 bg-[linear-gradient(90deg,rgb(var(--accent)),rgb(var(--accent-2)))]" />
      </div>
      {children}
    </section>
  );
}
