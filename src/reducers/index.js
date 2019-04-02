import { combineReducers } from 'redux'

import wordReducer, * as fromWord from './word'
import boardReducer, * as fromBoard from './board'
import wordListReducer, * as fromWordList from './word-list'

const rootReducer = combineReducers({
  word: wordReducer,
  board:boardReducer,
  wordList :wordListReducer,
})

export const word = state => fromWord.word(state)

export const validWords = state => fromWordList.validWords(state)
export const invalidWords = state => fromWordList.invalidWords(state)

export const tiles = state => fromBoard.tiles(state)
export const letter = (state, id) => fromBoard.letter(state, id)
export const isBoardActive = state => fromBoard.isBoardActive(state)
export const isTileVisited = (state, id) => fromBoard.isTileVisited(state, id)

export default rootReducer