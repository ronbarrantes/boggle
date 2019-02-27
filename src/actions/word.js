import { ADD_LETTER, CHECK_WORD, SET_LETTER, RESET_WORD } from '../constants/action-types'

export const addLetter = (letter) => ({
  type: ADD_LETTER, letter,
})

export const setLetter = (letterId) => ({
  type: SET_LETTER, letterId,
})

export const resetWord = () => ({
  type: RESET_WORD,
})

export const checkWord = () => ({
  type: CHECK_WORD,
})
