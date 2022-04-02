import { call, put, takeEvery } from 'redux-saga/effects'
import { CURRENT_REDUCER_GET_CURRENT_NEWS } from './constants'
import { hackerAPI } from '@/api/api'
import { setCurrentNews } from '@/store/currentNewsReducer/actions'
import { setAppStatus } from '@/store/appReducer/actions'
import { LOADING } from '@/constants/appStatus'
import { getComments } from '@/store/commentsReducer/sagaActions'

export function* getCurrentNewsWorkerSaga(action) {
  yield put(setAppStatus(LOADING))
  const res = yield call(hackerAPI.oneNews, action.id)
  const comments = res.kids

  yield put(setCurrentNews(res))
  yield put(getComments(comments))
}

export function* currentNewsWatcherSaga() {
  yield takeEvery(
    CURRENT_REDUCER_GET_CURRENT_NEWS,
    getCurrentNewsWorkerSaga,
  )
}
