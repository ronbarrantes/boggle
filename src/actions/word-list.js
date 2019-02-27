import { ADD_VALID_WORD, ADD_INVALID_WORD } from '../constants/action-types'

export const addValidWord = (word) => ({
  type: ADD_VALID_WORD, word,
})
export const addInvalidWord = (word) => ({
  type: ADD_INVALID_WORD, word,
})

