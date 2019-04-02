import { ADD_LETTER, RESET_WORD, CHECK_WORD, NO_WORD_ADDED } from '../constants/action-types'

const initialState = ''

const wordReducer = (word = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return word += action.letter

    case CHECK_WORD:
      return initialState

    case NO_WORD_ADDED:
      return initialState

    case RESET_WORD:
      return initialState

    default:
      return word
  }
}

export const word = state => state.word

export default wordReducer