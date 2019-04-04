import { ADD_LETTER, CHECK_WORD, SET_LETTER, RESET_WORD, SELECT_LETTER } from '../constants/action-types'

export const selectLetter = (tileId) => ({
  type: SELECT_LETTER, tileId,
})

export const addLetter = (letter) => ({
  type: ADD_LETTER, letter,
})

export const setLetter = (tileId) => ({
  type: SET_LETTER, tileId,
})

export const resetWord = () => ({
  type: RESET_WORD,
})

export const checkWord = () => ({
  type: CHECK_WORD,
})
