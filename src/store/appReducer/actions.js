import { APP_REDUCER_SET_APP_STATUS } from './constants'

export const setAppStatus = status => ({
  type: APP_REDUCER_SET_APP_STATUS,
  status,
})
