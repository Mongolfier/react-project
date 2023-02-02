type Mods = Record<string, boolean | string>


export const cx = (cls: string, mods?: Mods, additional?: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.keys(mods)
      .filter((key) => Boolean(mods[key]))
      .map((className) => className)
  ].join(" ")
}