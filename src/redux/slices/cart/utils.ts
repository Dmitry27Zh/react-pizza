import { CartKey, CartKeyParams } from '../../../types'
import { Key } from './const'

type Params = {
  [key: string]: number | string
}

export const codeCartItemParams = <T extends Params>(params: T): CartKey => {
  return Object.entries(params)
    .map((entry) => entry.join(Key.SEMI_SEPARATOR))
    .join(Key.MAIN_SEPARATOR)
}

export const decodeCartItemParams = (params: CartKey): CartKeyParams => {
  const parts = params.split(Key.MAIN_SEPARATOR).map((code) => code.split(Key.SEMI_SEPARATOR))

  return Object.fromEntries(parts)
}
