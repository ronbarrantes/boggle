import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

import logMiddleware from './middleware/log'
import initBoard from './middleware/init-board'

import checkWord from './middleware/check-word'
import activateBoard from './middleware/activate-board'
import selectLetter from './middleware/select-letter'
import deactivateBoard from './middleware/deactivate-board'

const middleware = [
  initBoard,
  activateBoard,
  selectLetter,
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