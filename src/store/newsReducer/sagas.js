import { call, put, takeEvery } from 'redux-saga/effects'
import { hackerAPI } from '@/api/api'
import { setNews } from '@/store/newsReducer/actions'
import {NEWS_REDUCER_GET_NEWS} from './constants'

export function* getNewsWorkerSaga() {
  const res = yield call(hackerAPI.allNews)
  yield put(setNews(res))
}

export function* newsWatcherSaga() {
  yield takeEvery(NEWS_REDUCER_GET_NEWS, getNewsWorkerSaga)
}
