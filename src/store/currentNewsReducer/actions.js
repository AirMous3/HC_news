import { CURRENT_REDUCER_SET_CURRENT_NEWS } from './constants'

export const setCurrentNews = currentNews => ({
  type: CURRENT_REDUCER_SET_CURRENT_NEWS,
  currentNews,
})
