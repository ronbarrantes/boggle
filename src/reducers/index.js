import { combineReducers } from 'redux'

import wordReducer, * as fromWordReducer from './word'
import boardReducer, * as fromBoardReducer from './board'
import wordListReducer, * as fromWordListReducer from './word-list'

const rootReducer = combineReducers({
  word: wordReducer,
  board:boardReducer,
  wordList :wordListReducer,
})

export const word = state => fromWordReducer.word(state)
export const validWords = state => fromWordListReducer.validWords(state)
export const invalidWords = state => fromWordListReducer.invalidWords(state)
export const tiles = state => fromBoardReducer.tiles(state)
export const letter = (state, id) => fromBoardReducer.letter(state, id)
export const isBoardActive = state => fromBoardReducer.isBoardActive(state)
export const isTileVisited = (state, id) => fromBoardReducer.isTileVisited(state, id)

export default rootReducer