import { combineReducers } from 'redux'

import wordReducer from './word'
import boardReducer from './board'
import lettersReducer from './letters'
import wordListReducer from './word-list'

const rootReducer = combineReducers({ 
  word: wordReducer, 
  board:boardReducer, 
  letters:lettersReducer, 
  wordList :wordListReducer,
 })

export default rootReducer