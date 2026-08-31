/**
 * Catálogo de idiomas e negociação.
 *
 * Espelha `lib/i18n/locales.ts` do MathType — os dois aplicativos vivem no
 * mesmo domínio e oferecer conjuntos de idiomas diferentes seria uma
 * inconsistência visível para quem atravessa do portfólio para o jogo.
 *
 * Importado pelo `proxy.ts`, que roda no runtime Edge — por isso nada de
 * `server-only`, de importar dicionário ou de tocar em API do Node aqui. Só
 * dados e funções puras. Os dicionários ficam em `dictionaries/`, carregados
 * apenas no servidor Node (layout).
 */

export const LOCALES = ['en', 'pt', 'es', 'fr', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * Inglês é o padrão final. Não é o idioma do autor — é o que tem a maior
 * chance de ser legível por quem chegou sem nenhum sinal aproveitável, e este
 * currículo é escrito para um mercado internacional.
 */
export const DEFAULT_LOCALE: Locale = 'en';

/** Nome de cada idioma **no próprio idioma** — quem não lê a UI atual precisa se achar. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

/** Rótulo curto do seletor, onde não cabe o nome inteiro. */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: 'EN',
  pt: 'PT',
  es: 'ES',
  fr: 'FR',
  zh: '中',
  ja: '日',
  ko: '한',
};

/**
 * Valor do atributo `lang` do `<html>`. Mais específico que o código interno
 * porque afeta hifenização, seleção de fonte do sistema e leitores de tela.
 */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR',
  es: 'es',
  fr: 'fr',
  zh: 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
};

/**
 * Nome do cookie. Prefixado com o aplicativo porque o domínio hospeda outros:
 * o MathType usa `mathtype-lang` e os dois convivem sem se sobrescrever.
 */
export const LOCALE_COOKIE = 'portfolio-lang';

/** Um ano: a escolha de idioma não deve expirar no meio do uso. */
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * País → idioma, usado só como desempate quando o `Accept-Language` não aponta
 * para nenhum idioma suportado. Deliberadamente curto: cobre os países onde o
 * idioma oficial é um dos sete e a inferência é segura. País ausente daqui cai
 * no padrão, que é melhor que adivinhar.
 */
const COUNTRY_LOCALE: Record<string, Locale> = {
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es',
  UY: 'es', PY: 'es', BO: 'es', EC: 'es', GT: 'es', CU: 'es', DO: 'es',
  CR: 'es', PA: 'es', HN: 'es', NI: 'es', SV: 'es',
  FR: 'fr', BE: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', MC: 'fr',
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  JP: 'ja',
  KR: 'ko',
};

/**
 * Uma entrada de `Accept-Language`, já com o peso resolvido.
 * `pt-BR;q=0.9` → `{ tag: 'pt-br', q: 0.9 }`
 */
interface LanguageRange {
  tag: string;
  q: number;
}

function parseAcceptLanguage(header: string): LanguageRange[] {
  return header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.find((p) => p.trim().startsWith('q='));
      // `q` ausente significa 1 — é o padrão do RFC 9110, não um erro.
      const q = qParam ? Number(qParam.trim().slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0 };
    })
    .filter((r) => r.tag !== '' && r.q > 0)
    .sort((a, b) => b.q - a.q);
}

/**
 * Casa uma tag BCP-47 com um dos idiomas suportados, comparando só a subtag
 * primária: `pt-BR`, `pt-PT` e `pt` são todos `pt` aqui, porque o conteúdo não
 * distingue variantes regionais.
 */
function matchLocale(tag: string): Locale | null {
  const primary = tag.split('-')[0];
  return isLocale(primary) ? primary : null;
}

/**
 * A ordem é a decisão de produto: o navegador diz o que a pessoa **lê**, o IP
 * diz onde ela **está**. Um recrutador brasileiro em Tóquio quer português, e é
 * o `Accept-Language` que sabe disso. O país entra só quando o cabeçalho não
 * ajuda.
 *
 * @param acceptLanguage cabeçalho cru, ou null
 * @param country ISO-3166 alpha-2 da geolocalização, ou null onde não houver
 */
export function negotiateLocale(
  acceptLanguage: string | null,
  country: string | null,
): Locale {
  if (acceptLanguage) {
    for (const range of parseAcceptLanguage(acceptLanguage)) {
      const hit = matchLocale(range.tag);
      if (hit) return hit;
    }
  }

  if (country) {
    const hit = COUNTRY_LOCALE[country.toUpperCase()];
    if (hit) return hit;
  }

  return DEFAULT_LOCALE;
}

/**
 * Preenche `{marcadores}` num texto do dicionário.
 *
 * Existe porque o dicionário atravessa a fronteira Server → Client como dado:
 * uma função ali não sobreviveria à serialização do React. Então o texto
 * carrega os buracos e quem renderiza os preenche.
 */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    key in vars ? String(vars[key]) : whole,
  );
}
