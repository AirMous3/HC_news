import { call, put, takeEvery } from 'redux-saga/effects'
import { CURRENT_REDUCER_GET_CURRENT_NEWS } from './constants'
import { hackerAPI } from '@/api/api'
import { setCurrentNews } from '@/store/currentNewsReducer/actions'
import { setComments } from '@/store/commentsReducer/actions'
import { setAppStatus } from '@/store/appReducer/actions'
import { DONE, LOADING } from '@/constants/appStatus'

export function* getCurrentNewsWorkerSaga(action) {
  yield put(setAppStatus(LOADING))
  const res = yield call(hackerAPI.oneNews, action.id)
  yield put(setCurrentNews(res))

  const comments = []

  if (res.kids) {
    for (let i = 0; i < res.kids.length; i++) {
      const response = yield call(
        hackerAPI.oneNews,
        res.kids[i],
      )
      if (!response.deleted && !response.dead) {
        comments.push(response)
      }
    }
  }

  yield put(setComments(comments))
  yield put(setAppStatus(DONE))
}

export function* currentNewsWatcherSaga() {
  yield takeEvery(
    CURRENT_REDUCER_GET_CURRENT_NEWS,
    getCurrentNewsWorkerSaga,
  )
}
