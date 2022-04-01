import {
  NEWS_REDUCER_SET_NEWS,
} from './constants'


export const setNews = news => ({
  type: NEWS_REDUCER_SET_NEWS,
  news,
})
