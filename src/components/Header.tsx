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
        </div>
      </div>
    </header>
  );
}
