import { ADD_LETTER, RESET_LETTERS } from '../constants/action-types'

export const addLetter = (letter) => ({
  type: ADD_LETTER, letter,
})

export const resetLetter = () => ({
  type: RESET_LETTERS,
})