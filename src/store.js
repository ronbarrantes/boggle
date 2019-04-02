import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import logMiddleware from './middleware/log'
import initBoard from './middleware/init-board'
import resetLetters from './middleware/reset-letters'
import checkWord from './middleware/check-word'
import setLetter from './middleware/set-letter'
import isBoardActive from './middleware/is-board-active'
import toggleBoard from './middleware/toggle-board'


const middleware = [
  initBoard,
  checkWord,
  isBoardActive,
  toggleBoard,
  resetLetters,
  setLetter,
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