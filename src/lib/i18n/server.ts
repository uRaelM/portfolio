import 'server-only';

import { cookies, headers } from 'next/headers';
import {
  LOCALE_COOKIE,
  type Locale,
  isLocale,
  negotiateLocale,
} from './locales';

/**
 * Idioma da requisição, para uso em Server Components.
 *
 * O `proxy.ts` normalmente já gravou o cookie, então o caminho comum é ler e
 * pronto. A negociação repetida aqui é rede de segurança: se o matcher do proxy
 * não pegar uma rota, a página sai no idioma certo do mesmo jeito, em vez de
 * cair no padrão silenciosamente.
 *
 * Assíncrona porque no Next 16 `cookies()` e `headers()` retornam Promise.
 *
 * Chamar isto em mais de um lugar da mesma requisição não custa duas leituras:
 * `cookies()` e `headers()` são cacheadas por requisição pelo próprio Next.
 */
export async function resolveLocale(): Promise<Locale> {
  const fromCookie = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const h = await headers();
  return negotiateLocale(
    h.get('accept-language'),
    h.get('x-vercel-ip-country') ?? h.get('cf-ipcountry'),
  );
}
