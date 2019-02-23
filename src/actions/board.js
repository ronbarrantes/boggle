import { INIT_BOARD, SET_BOARD, SET_LETTER_VISITED, RESET_LETTERS, SET_LETTER_RESET } from '../constants/action-types'

export const initBoard  = () => ({
  type: INIT_BOARD,
})

export const setBoard = (board) => ({
  type: SET_BOARD, board,
})

export const setLettersVisited = (letterId, isVisited) => ({
  type: SET_LETTER_VISITED, letterId, isVisited,
})

export const resetLetters = () => ({
  type: RESET_LETTERS,
})

export const setLetterReset = (board) => ({
  type: SET_LETTER_RESET, board,
})