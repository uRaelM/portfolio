import type { Dictionary } from '@/lib/i18n/dictionaries';
import { fmt } from '@/lib/i18n/locales';

export default function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        {/*
          O ano vem do servidor. Renderizá-lo no cliente causaria divergência de
          hidratação toda virada de ano — e, pior, em qualquer visitante cujo
          fuso já esteja no ano seguinte.
        */}
        <span>{fmt(t.footer.rights, { year: new Date().getFullYear() })}</span>
      </div>
    </footer>
  );
}
