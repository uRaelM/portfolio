import CopyEmail from '@/components/CopyEmail';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { resolveLocale } from '@/lib/i18n/server';
import {
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILLS,
  SPOKEN,
  STATS,
} from '@/lib/resume';

/**
 * Cabeçalho de seção: um número em mono e o título.
 *
 * A numeração é decorativa (`aria-hidden`) — para quem usa leitor de tela ela
 * só atrapalharia a leitura do índice de títulos, que já dá a ordem.
 */
function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
      <span aria-hidden="true" className="font-mono text-sm font-normal text-accent">
        {index}
      </span>
      {children}
    </h2>
  );
}

/** Etiqueta de tecnologia. Usada em experiências e projetos. */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded border border-line bg-raised/50 px-2 py-0.5 font-mono text-[11px] text-dim">
      {children}
    </li>
  );
}

export default async function Home() {
  const locale = await resolveLocale();
  const t = getDictionary(locale);

  return (
    <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-5 sm:px-8">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section id="top" className="border-b border-line/50 py-20 sm:py-28">
        <p className="font-mono text-sm text-accent">{t.hero.greeting}</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {t.hero.name}
        </h1>

        <ul className="mt-5 flex flex-wrap gap-2">
          {t.hero.roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-line bg-raised/50 px-3 py-1 font-mono text-xs text-dim"
            >
              {role}
            </li>
          ))}
        </ul>

        {/* `max-w-2xl` porque linha longa demais cansa: ~75 caracteres é o teto. */}
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">
          {t.hero.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50"
          >
            {t.hero.ctaEmail}
          </a>
          <span className="font-mono text-xs text-faint">
            <span aria-hidden="true">◦ </span>
            {t.hero.location}
          </span>
        </div>

        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
          {[
            { value: STATS.years, label: t.hero.statYears },
            { value: STATS.roles, label: t.hero.statRoles },
            { value: STATS.languages, label: t.hero.statLanguages },
          ].map((stat) => (
            /*
             * `flex-col-reverse` põe o valor acima do rótulo visualmente sem
             * inverter a ordem no DOM: `<dt>` (o rótulo) precisa vir antes do
             * `<dd>` (o valor) para a lista de definição fazer sentido.
             */
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs leading-snug text-faint">{stat.label}</dt>
              <dd className="font-mono text-3xl font-bold text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Sobre + competências ───────────────────────────────── */}
      <section id="about" className="border-b border-line/50 py-16 sm:py-20">
        <SectionHeading index="01">{t.about.heading}</SectionHeading>

        <p className="max-w-3xl text-base leading-relaxed text-dim">{t.about.body}</p>

        <h3 className="mt-12 mb-6 font-mono text-sm text-faint">{t.skills.heading}</h3>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group) => {
            // Liderança é a exceção: seus chips são prosa traduzível, não nomes
            // de tecnologia, e por isso vêm do dicionário e não de `resume.ts`.
            const chips: readonly string[] =
              group.key === 'leadership' ? t.skills.leadershipItems : group.items;

            return (
            <li
              key={group.key}
              className="rounded-lg border border-line bg-raised/40 p-5 transition-colors hover:border-accent/30"
            >
              <h4 className="font-mono text-xs tracking-wide text-accent uppercase">
                {t.skills[group.key]}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-dim">
                {t.skills[`${group.key}Note`]}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {chips.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </li>
            );
          })}
        </ul>
      </section>

      {/* ── Experiência ────────────────────────────────────────── */}
      <section id="experience" className="border-b border-line/50 py-16 sm:py-20">
        <SectionHeading index="02">{t.experience.heading}</SectionHeading>

        {/*
          Linha vertical desenhada com a borda do `<ol>` em vez de um pseudo-
          elemento por item: assim ela é contínua entre os cargos, sem os cortes
          que apareceriam nos espaçamentos.
        */}
        <ol className="space-y-10 border-l border-line pl-6 sm:pl-8">
          {EXPERIENCE.map((job) => {
            const entry = t.experience[job.key];
            const period = `${job.from} — ${job.to ?? t.experience.current}`;

            return (
              <li key={job.key} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-[1.9rem] h-2 w-2 rounded-full bg-accent ring-4 ring-bg sm:-left-[2.4rem]"
                />

                <p className="font-mono text-xs text-faint">{period}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-ink">{entry.role}</h3>
                <p className="mt-0.5 text-sm text-accent">{job.company}</p>

                <ul className="mt-4 space-y-2">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-sm leading-relaxed text-dim before:absolute before:top-[0.6rem] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-faint"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── Projetos ───────────────────────────────────────────── */}
      <section id="projects" className="border-b border-line/50 py-16 sm:py-20">
        <SectionHeading index="03">{t.projects.heading}</SectionHeading>

        <ul className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => {
            const entry = t.projects[project.key];
            /*
             * `/mathtype` é interno ao domínio e abre na mesma aba; os demais
             * são sites de terceiros e abrem em nova, com `noreferrer` para não
             * vazar a URL de origem.
             */
            const isExternal = project.url !== null && !project.url.startsWith('/');

            return (
              <li
                key={project.key}
                className="flex flex-col rounded-lg border border-line bg-raised/40 p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-ink">{project.name}</h3>
                  {project.url ? (
                    <a
                      href={project.url}
                      {...(isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="shrink-0 font-mono text-xs text-accent transition-opacity hover:opacity-80"
                    >
                      {t.projects.visit}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ) : null}
                </div>

                <p className="mt-1 text-sm text-faint">{entry.tagline}</p>

                <ul className="mt-4 flex-1 space-y-2">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm leading-relaxed text-dim">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── Formação + idiomas ─────────────────────────────────── */}
      <section className="grid gap-12 border-b border-line/50 py-16 sm:grid-cols-2 sm:py-20">
        <div>
          <SectionHeading index="04">{t.education.heading}</SectionHeading>
          <p className="font-mono text-xs text-faint">
            {EDUCATION.from} — {EDUCATION.to}
          </p>
          <h3 className="mt-1.5 font-semibold text-ink">{t.education.degree}</h3>
          <p className="mt-0.5 text-sm text-accent">{EDUCATION.school}</p>
        </div>

        <div>
          <SectionHeading index="05">{t.languages.heading}</SectionHeading>
          <dl className="space-y-3">
            {SPOKEN.map((language) => (
              <div
                key={language.key}
                className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2"
              >
                <dt className="text-sm text-ink">{t.languages[language.key]}</dt>
                <dd className="font-mono text-xs text-dim">{t.languages[language.level]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Contato ────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20">
        <SectionHeading index="06">{t.contact.heading}</SectionHeading>

        <p className="max-w-xl text-base leading-relaxed text-dim">{t.contact.body}</p>

        <div className="mt-7">
          <p className="mb-2 font-mono text-xs text-faint">{t.contact.emailLabel}</p>
          <CopyEmail
            email={PROFILE.email}
            copyLabel={t.contact.copy}
            copiedLabel={t.contact.copied}
          />
        </div>
      </section>
    </main>
  );
}
