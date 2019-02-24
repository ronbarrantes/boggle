import {
  INIT_BOARD,
  SET_BOARD,
  SET_LETTER_VISITED,
  RESET_LETTERS,
  SET_LETTER_RESET,
  SET_BOARD_ACTIVE,
} from '../constants/action-types'

export const initBoard  = () => ({
  type: INIT_BOARD,
})

export const setBoard = (board) => ({
  type: SET_BOARD, board,
})

export const setBoardActive = () => ({
  type: SET_BOARD_ACTIVE,
})

export const setLetterVisited = (letterId) => ({
  type: SET_LETTER_VISITED, letterId,
})

export const resetLetters = () => ({
  type: RESET_LETTERS,
})

export const setLetterReset = (board) => ({
  type: SET_LETTER_RESET, board,
})