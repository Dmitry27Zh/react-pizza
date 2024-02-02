export const getSearchParams = (params) => {
  const searchParams = new URLSearchParams('')
  for (let name in params) {
    const value = params[name]

    if (value != null) {
      searchParams.append(name, value)
    }
  }

  return searchParams
}
