export type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  const modsKey = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);

  return [
    cls,
    ...additional.filter(Boolean),
    ...modsKey,
  ].join(' ');
}
