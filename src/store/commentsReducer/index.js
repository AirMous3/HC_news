import {COMMENTS_REDUCER_SET_COMMENTS} from './constants'

const initialState = []
export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REDUCER_SET_COMMENTS:
      return [...action.comments]
    default:
      return state
  }
}
