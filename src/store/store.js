import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { newsWatcherSaga } from '@/store/newsReducer/sagas'
import { currentNewsReducer } from '@/store/currentNewsReducer'
import { appReducer } from '@/store/appReducer'
import { newsReducer } from '@/store/newsReducer'
import { currentNewsWatcherSaga } from '@/store/currentNewsReducer/sagas'
import {commentsReducer} from '@/store/commentsReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
  currentNews: currentNewsReducer,
  comments: commentsReducer,
})
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

function* rootSaga() {
  yield all([newsWatcherSaga(), currentNewsWatcherSaga()])
}
