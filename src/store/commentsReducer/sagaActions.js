import {COMMENTS_SAGA_GET_COMMENTS} from './constants'

export const getComments = comments => ({type: COMMENTS_SAGA_GET_COMMENTS, comments})
