import { IDLE } from '@/constants/appStatus'
import { APP_REDUCER_SET_APP_STATUS } from '@/store/appReducer/constants'

const initialState = {
  status: IDLE,
}
export const appReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case APP_REDUCER_SET_APP_STATUS:
      return { ...state, status: action.status }
    default:
      return state
  }
}
