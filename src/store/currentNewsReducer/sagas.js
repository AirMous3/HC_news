import { call, put, takeEvery } from 'redux-saga/effects'
import { CURRENT_REDUCER_GET_CURRENT_NEWS } from './constants'
import { hackerAPI } from '@/api/api'
import { setCurrentNews } from '@/store/currentNewsReducer/actions'

export function* getCurrentNewsWorkerSaga(action) {
  const res = yield call(hackerAPI.oneNews, action.id)
  yield put(setCurrentNews(res))
}

export function* currentNewsWatcherSaga() {
 yield takeEvery(
    CURRENT_REDUCER_GET_CURRENT_NEWS,
    getCurrentNewsWorkerSaga,
  )
}
