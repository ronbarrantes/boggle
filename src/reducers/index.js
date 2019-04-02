import { combineReducers } from 'redux'

import wordReducer from './word'
import boardReducer, * as fromBoardReducer from './board'
import wordListReducer, * as fromWordList from './word-list'

const rootReducer = combineReducers({
  word: wordReducer,
  board:boardReducer,
  wordList :wordListReducer,
})

export const validWords = state => fromWordList.validWords(state)
export const invalidWords = state => fromWordList.invalidWords(state)

export const tiles = state => fromBoardReducer.tiles(state)
export const letter = (state, id) => fromBoardReducer.letter(state, id)
export const isBoardActive = state => fromBoardReducer.isBoardActive(state)
export const isTileVisited = (state, id) => fromBoardReducer.isTileVisited(state, id)

export default rootReducer