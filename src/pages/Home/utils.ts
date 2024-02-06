import { SearchParams } from '../../types'

export const getSearchParams = (params: SearchParams) => {
  const searchParams = new URLSearchParams('')
  for (let name in params) {
    const value = params[name]

    if (value != null) {
      searchParams.append(name, String(value))
    }
  }

  return searchParams
}
