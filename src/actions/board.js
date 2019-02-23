import { INIT_BOARD, SET_BOARD, SET_LETTER_VISITED } from '../constants/action-types'

export const initBoard  = () => ({
  type: INIT_BOARD,
})

export const setBoard = (board) => ({
  type: SET_BOARD, board,
})

export const setLettersVisited = (letterId, isVisited) => ({
  type: SET_LETTER_VISITED, letterId, isVisited,
})