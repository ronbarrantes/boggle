import { combineReducers } from 'redux'

import wordReducer from './word'
import boardReducer from './board'
import wordListReducer from './word-list'

const rootReducer = combineReducers({
  word: wordReducer,
  board:boardReducer,
  wordList :wordListReducer,
})

export default rootReducer