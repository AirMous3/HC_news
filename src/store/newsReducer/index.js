import {NEWS_REDUCER_SET_NEWS} from './constants'

const initialState = []
export const newsReducer = (state = initialState,action) => {
  switch (action.type) {
    case NEWS_REDUCER_SET_NEWS:
      return [action.news]
    default:
      return state
  }
}
