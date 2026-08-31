import 'server-only';

import type { Locale } from '../locales';
import type { Dictionary } from './en';
import en from './en';
import pt from './pt';
import es from './es';
import fr from './fr';
import zh from './zh';
import ja from './ja';
import ko from './ko';

/**
 * Os sete dicionários, importados estaticamente.
 *
 * Isso **não** manda sete dicionários para o navegador: este módulo é
 * `server-only` e a página entrega apenas o do idioma ativo — e, aos poucos
 * componentes de cliente, só as strings de que eles precisam. O que cruza a
 * fronteira são alguns KB, não o catálogo inteiro.
 */
const DICTIONARIES: Record<Locale, Dictionary> = { en, pt, es, fr, zh, ja, ko };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
