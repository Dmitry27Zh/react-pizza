import axios from 'axios'
import { Items } from '../types/index'

const fetchAll = (searchParams: string = ''): Promise<Items> => {
  const url = new URL('https://65b09ea3d16d31d11bdcde5a.mockapi.io/items')
  url.search = searchParams

  return axios.get(url.toString()).then((res) => res.data)
}

const DELAY = 10000
let savedItems: Items | null = null

const getById = async (id: number) => {
  const promise = savedItems
    ? Promise.resolve(savedItems)
    : fetchAll().then((data) => {
        savedItems = data
        setTimeout(() => (savedItems = null), DELAY)

        return data
      })

  const items = await promise

  return items.find((item) => item._id === id)
}

const api = { fetchAll, getById }

export default api
