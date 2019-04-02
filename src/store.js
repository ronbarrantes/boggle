import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

import logMiddleware from './middleware/log'
import initBoard from './middleware/init-board'
import checkWord from './middleware/check-word'
import isBoardActive from './middleware/is-board-active'

import activateBoard from './middleware/activate-board'
import activateLetter from './middleware/activate-letter'
import deactivateBoard from './middleware/deactivate-board'

const middleware = [
  initBoard,
  isBoardActive,
  activateBoard,
  activateLetter,
  deactivateBoard,
  checkWord,
  logMiddleware,
]

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