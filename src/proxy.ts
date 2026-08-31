import { NextResponse, type NextRequest } from 'next/server';
import {
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  isLocale,
  negotiateLocale,
} from '@/lib/i18n/locales';

/**
 * Escolhe o idioma na primeira visita e o grava num cookie.
 *
 * No Next 16 este arquivo se chama `proxy.ts` e exporta `proxy` — o
 * `middleware.ts` do MathType é a convenção antiga, depreciada nesta versão.
 * A lógica é a mesma.
 */
export function proxy(req: NextRequest) {
  const current = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(current)) return NextResponse.next();

  const country =
    req.headers.get('x-vercel-ip-country') ?? req.headers.get('cf-ipcountry') ?? null;
  const locale = negotiateLocale(req.headers.get('accept-language'), country);

  // Grava no request também, e não só na resposta: sem isto o layout desta
  // mesma requisição ainda não veria o cookie, e a primeira visita renderizaria
  // no idioma padrão antes de corrigir na navegação seguinte.
  req.cookies.set(LOCALE_COOKIE, locale);
  const res = NextResponse.next({ request: { headers: req.headers } });
  res.cookies.set(LOCALE_COOKIE, locale, {
    /*
     * `/` porque o portfólio é a aplicação da raiz do domínio. O custo é que o
     * cookie viaja junto nas requisições de `/mathtype`, que não o usa — são
     * ~20 bytes, e restringi-lo a um prefixo mais estreito não funcionaria:
     * não existe prefixo comum às páginas do portfólio além da própria raiz.
     */
    path: '/',
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: 'lax',
  });
  return res;
}

export const config = {
  /*
   * Assets estáticos ficam de fora: não têm texto de interface, e negociar
   * idioma neles só gastaria CPU. `/mathtype` **não** precisa ser excluído
   * aqui — é outra aplicação, servida por outro container, e esta requisição
   * nunca chega a este processo.
   */
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)'],
};
