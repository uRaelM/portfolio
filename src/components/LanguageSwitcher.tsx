'use client';

import { useRouter } from 'next/navigation';
import {
  LOCALES,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_NAMES,
  type Locale,
} from '@/lib/i18n/locales';

/**
 * Seletor de idioma.
 *
 * É um `<select>` nativo de propósito: um menu próprio precisaria reimplementar
 * navegação por teclado, foco e o comportamento de rolagem em tela pequena, e
 * o nativo já entrega tudo isso — inclusive a roda de seleção do iOS, que é
 * melhor do que qualquer lista custom em telas de celular.
 *
 * A escolha grava o mesmo cookie que o `proxy.ts` grava na primeira visita.
 * `router.refresh()` re-renderiza os Server Components com o cookie novo; não é
 * preciso recarregar a página inteira, e o estado de rolagem se mantém.
 */
export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    document.cookie =
      `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    router.refresh();
  }

  return (
    <label className="relative flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={handleChange}
        aria-label={label}
        className="cursor-pointer appearance-none rounded-md border border-line bg-raised/60 py-1.5 pr-7 pl-2.5 font-mono text-xs text-dim transition-colors hover:border-accent/50 hover:text-ink focus-visible:text-ink"
      >
        {LOCALES.map((code) => (
          // O `<option>` herda pouco estilo do `<select>` e é desenhado pelo
          // sistema — daí a cor de fundo explícita, sem a qual o texto claro
          // cairia sobre o branco padrão do menu no Windows e no Linux.
          <option key={code} value={code} className="bg-raised text-ink">
            {LOCALE_NAMES[code]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="pointer-events-none absolute right-2.5 h-2.5 w-2.5 fill-none stroke-dim stroke-[1.5]"
      >
        <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
