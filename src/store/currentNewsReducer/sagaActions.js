import { CURRENT_SAGA_GET_CURRENT_NEWS } from './constants'

export const getCurrentNews = id => ({
  type: CURRENT_SAGA_GET_CURRENT_NEWS,
  id,
})
