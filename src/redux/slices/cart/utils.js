import { Key } from './const'

export const codeCartItemParams = (params) => {
  return Object.entries(params)
    .map((entry) => entry.join(Key.SEMI_SEPARATOR))
    .join(Key.MAIN_SEPARATOR)
}

export const decodeCartItemParams = (params) => {
  const parts = params.split(Key.MAIN_SEPARATOR).map((code) => code.split(Key.SEMI_SEPARATOR))

  return Object.fromEntries(parts)
}
