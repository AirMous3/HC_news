import { call, put, takeEvery } from 'redux-saga/effects'
import { hackerAPI } from '@/api/api'
import { setNews } from '@/store/newsReducer/actions'
import {NEWS_SAGA_GET_NEWS} from './constants'

export function* getNewsWorkerSaga() {
  const res = yield call(hackerAPI.allNews)
  const news = []
  for (let i = 0; i < res.length; i++) {
    const response = yield call(hackerAPI.oneNews,res[i])
    news.push(response)
  }
  localStorage.setItem('news',JSON.stringify(news))
  yield put(setNews(news))
}

export function* newsWatcherSaga() {
  yield takeEvery(NEWS_SAGA_GET_NEWS, getNewsWorkerSaga)
}
