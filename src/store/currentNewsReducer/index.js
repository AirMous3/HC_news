import {CURRENT_REDUCER_SET_CURRENT_NEWS} from './constants'

const initialState = {}
export const currentNewsReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CURRENT_REDUCER_SET_CURRENT_NEWS:
      return {...action.currentNews}
    default:
      return state
  }
}
