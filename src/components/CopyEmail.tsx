'use client';

import { useEffect, useState } from 'react';

/**
 * Endereço de e-mail com botão de copiar.
 *
 * O `mailto:` continua sendo o link principal — quem tem cliente de e-mail
 * configurado espera que clicar abra um rascunho. O botão existe para quem
 * usa webmail, onde `mailto:` não leva a lugar nenhum útil.
 */
export default function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  // O "Copiado" volta a "Copiar" sozinho. O timer é limpo na desmontagem para
  // não chamar setState num componente que já saiu da árvore.
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // `navigator.clipboard` não existe fora de contexto seguro (HTTP puro) e
      // pode ser negado por permissão. Falhar em silêncio é aceitável aqui: o
      // endereço está visível na tela e o `mailto:` ao lado continua valendo.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="font-mono text-lg text-ink underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent sm:text-xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-dim transition-colors hover:border-accent/50 hover:text-ink"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
