type Mods = Record<string, boolean | string>

export const cx = (cls?: string, mods: Mods = {}, additional?: Array<string | undefined>): string => {
  const addtionalDefined = additional ?? []
  return [
    cls,
    ...addtionalDefined.filter(Boolean),
    ...Object.keys(Boolean(mods))
      .filter((key) => Boolean(mods[key]))
      .map((className) => className)
  ].join(' ')
}
