import { combineReducers } from 'redux'

import wordReducer from './word'
import boardReducer from './board'
import wordListReducer, * as fromWordList from './word-list'

const rootReducer = combineReducers({
  word: wordReducer,
  board:boardReducer,
  wordList :wordListReducer,
})

export const validWords = state => fromWordList.validWords(state)
export const invalidWords = state => fromWordList.invalidWords(state)

export default rootReducer