import { ADD_LETTER, RESET_LETTERS } from '../constants/action-types'

const initialState = ''

const wordReducer = (word = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return word += action.letter

    case RESET_LETTERS:
      return initialState

    default:
      return word
  }
}

export default wordReducer
