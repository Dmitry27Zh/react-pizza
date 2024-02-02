import axios from 'axios'

const fetchAll = (searchParams) => {
  const url = new URL('https://65b09ea3d16d31d11bdcde5a.mockapi.io/items')
  url.search = searchParams

  return axios.get(url)
}

const api = { fetchAll }

export default api
