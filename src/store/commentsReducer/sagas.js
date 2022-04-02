import { call, put, takeEvery } from 'redux-saga/effects'
import { COMMENTS_SAGA_GET_COMMENTS } from './constants'
import { hackerAPI } from '@/api/api'
import { setComments } from '@/store/commentsReducer/actions'
import { setAppStatus } from '@/store/appReducer/actions'
import { DONE } from '@/constants/appStatus'

export function* getCommentsWorkerSaga(action) {
  const comments = []

  if (action.comments) {
    for (let i = 0; i < action.comments.length; i++) {
      const response = yield call(
        hackerAPI.oneNews,
        action.comments[i],
      )
      if (!response.deleted && !response.dead) {
        comments.push(response)
      }
    }
  }

  yield put(setComments(comments))
  yield put(setAppStatus(DONE))
}

export function* commentsWatcherSaga() {
  yield takeEvery(
    COMMENTS_SAGA_GET_COMMENTS,
    getCommentsWorkerSaga,
  )
}
