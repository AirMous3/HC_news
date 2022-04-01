import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import { appReducer } from '@/store/appReducer/appReducer'
import createSagaMiddleware from 'redux-saga'
import { newsReducer } from '@/store/newsReducer/newsReducer'
import { all } from 'redux-saga/effects'
import {newsWatcherSaga} from '@/store/newsReducer/sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
})
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

function* rootSaga() {
  yield all([newsWatcherSaga()])
}
