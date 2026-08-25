import en, { type Dict } from "@/locales/en";
import fr from "@/locales/fr";
import de from "@/locales/de";
import es from "@/locales/es";
import it from "@/locales/it";

export type Lang = "en" | "fr" | "de" | "es" | "it";

const maps: Record<Lang, Dict> = { en, fr, de, es, it } as const;

export function getDict(lang: string | undefined): Dict {
  if (!lang) return en;
  const l = lang.toLowerCase();
  if (l in maps) return maps[l as Lang];
  return en;
}