import LanguageSwitcher from '@/components/LanguageSwitcher';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/locales';

/**
 * Cabeçalho fixo.
 *
 * Server Component: nada aqui tem estado. Só o seletor de idioma é de cliente,
 * e recebe por prop exatamente as duas coisas de que precisa — o idioma atual e
 * o rótulo traduzido —, não o dicionário inteiro.
 */
export default function Header({ t, locale }: { t: Dictionary; locale: Locale }) {
  const sections = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-4 px-5 sm:px-8">
        <a href="#main" className="sr-only focus:not-sr-only">
          {t.nav.skipToContent}
        </a>

        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-ink">
          rafael
          <span className="text-accent">.</span>
          miguel
        </a>

        <nav aria-label={t.nav.menuLabel} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-6">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className="font-mono text-xs text-dim transition-colors hover:text-ink"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2.5 md:ml-0">
          <LanguageSwitcher locale={locale} label={t.nav.languageLabel} />

          {/*
            Âncora comum, **não** `next/Link`: `/mathtype` é outra aplicação, em
            outro container, com o `basePath` dela. O `<Link>` trataria o
            caminho como rota interna — faria prefetch, não acharia nada e
            tentaria uma navegação de cliente que este roteador não sabe
            resolver. O `<a>` deixa a requisição sair para o proxy, que é quem
            sabe para onde ela vai.
          */}
          <a
            href="/mathtype"
            className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent transition-colors hover:border-accent hover:bg-accent/20"
          >
            {t.nav.mathtype}
            <span aria-hidden="true" className="ml-1.5 opacity-60">
              ↗
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
