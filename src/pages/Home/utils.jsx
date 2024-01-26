export const getUrl = (params) => {
  const url = new URL(`https://65b09ea3d16d31d11bdcde5a.mockapi.io/items`)
  for (let name in params) {
    const value = params[name]

    if (value != null) {
      url.searchParams.append(name, value)
    }
  }

  return url
}
