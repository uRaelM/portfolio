import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { resolveLocale } from '@/lib/i18n/server';
import { HTML_LANG, type Locale } from '@/lib/i18n/locales';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * Título e descrição seguem o idioma — é o que aparece na aba, no resultado de
 * busca e no card de link compartilhado.
 */
export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(await resolveLocale());
  return { title: t.meta.title, description: t.meta.description };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0f1e',
};

/**
 * Fonte CJK por idioma. A Geist não tem os glifos de chinês, japonês nem
 * coreano — sem isto o texto vira caixinhas. Carregamos **uma** Noto, a do
 * idioma ativo: as três somadas passariam de vários MB, cobrados a quem lê
 * português e nunca vai ver um kanji.
 */
const CJK_FONT: Partial<Record<Locale, string>> = {
  zh: 'Noto+Sans+SC:wght@400;500;700',
  ja: 'Noto+Sans+JP:wght@400;500;700',
  ko: 'Noto+Sans+KR:wght@400;500;700',
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const locale = await resolveLocale();
  const t = getDictionary(locale);
  const cjk = CJK_FONT[locale];

  return (
    <html
      lang={HTML_LANG[locale]}
      data-locale={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {cjk ? (
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?family=${cjk}&display=swap`}
          />
        </head>
      ) : null}
      <body className="flex min-h-full flex-col">
        <Header t={t} locale={locale} />
        {children}
        <Footer t={t} />
      </body>
    </html>
  );
}
