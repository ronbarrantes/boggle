import { ADD_LETTER, RESET_LETTERS, CHECK_WORD } from '../constants/action-types'

const initialState = ''

const wordReducer = (word = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return word += action.letter

    case CHECK_WORD:
      return initialState

    case RESET_LETTERS:
      return initialState

    default:
      return word
  }
}

export default wordReducer
