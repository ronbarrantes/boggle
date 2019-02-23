import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/root'
import logMiddleware from './middleware/log'
import initBoard from './middleware/init-board'
import isWordInList from './middleware/is-word-in-list'
import thunk from 'redux-thunk'

const middleware = [thunk, initBoard, isWordInList, logMiddleware]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, enhancer)
window.store = store

export default store