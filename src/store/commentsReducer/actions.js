import {COMMENTS_REDUCER_SET_COMMENTS} from './constants'

export const setComments = comments => ({
  type: COMMENTS_REDUCER_SET_COMMENTS,
  comments,
})
