import { ADD_LETTER, CHECK_WORD } from '../constants/action-types'

export const addLetter = (letter) => ({
  type: ADD_LETTER, letter,
})

export const checkWord = () => ({
  type: CHECK_WORD,
})