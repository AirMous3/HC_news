import { CURRENT_REDUCER_GET_CURRENT_NEWS } from './constants'

export const getCurrentNews = id => ({
  type: CURRENT_REDUCER_GET_CURRENT_NEWS,
  id,
})
