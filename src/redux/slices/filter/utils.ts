import { Categories, SortOptions } from '../../../types'
import { Page } from './const'
import pickBy from 'lodash.pickby'

const getCategoryParams = (params: URLSearchParams, categories: Categories) => {
  const value = params.get('category')
  const result = Number(value)
  const isUnknown = value == null
  const isNotExist = categories.every((category) => category._id !== result)
  const isReset = isUnknown || isNotExist

  if (isUnknown) {
    console.warn('Unknown category')
  } else if (isNotExist) {
    console.warn("Category doesn't exist")
  }

  if (isReset) {
    return null
  } else {
    return result
  }
}

const getPageParam = (params: URLSearchParams, count: number, start: number) => {
  const value = params.get('page')
  const result = Number(value)
  const end = start + count - 1
  const isUnknown = value == null
  const isNotExist = result < start || result > end
  const isReset = isUnknown || isNotExist

  if (isUnknown) {
    console.warn('Unknown page')
  } else if (isNotExist) {
    console.warn("Page doesn't exist")
  }

  if (isReset) {
    return null
  } else {
    return result
  }
}

const getSortParam = (params: URLSearchParams, sortOptions: SortOptions) => {
  const value = params.get('sortBy')
  const result = sortOptions.find((current) => current.value === value)
  const isUnknown = result == null

  if (isUnknown) {
    console.warn('Unknown sort')
    return null
  } else {
    return result
  }
}

const getSearchParams = (params: URLSearchParams) => {
  const value = params.get('search')
  const isUnknown = value == null

  if (isUnknown) {
    console.warn('Unknown search')
    return null
  } else {
    return value
  }
}

const getFilterParams = (categories: Categories, sortOptions: SortOptions) => {
  const searchParams = new URLSearchParams(window.location.search)
  const params = {
    category: getCategoryParams(searchParams, categories),
    sort: getSortParam(searchParams, sortOptions),
    page: getPageParam(searchParams, Page.COUNT, Page.START),
    search: getSearchParams(searchParams),
  }

  return pickBy(params, (val) => val != null)
}

export { getFilterParams }
