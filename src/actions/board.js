import {
  INIT_BOARD,
  SET_BOARD,
  SET_LETTER_RESET,
  SET_BOARD_ACTIVE,
  TOGGLE_ACTIVE,
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

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE,
})

export const setLetterReset = (board) => ({
  type: SET_LETTER_RESET, board,
})

export const activateEverything = () => ({
  type: 'ACTIVATE_FUCKING_EVERYTHING',
})

export const turnEverythingOn = (board) => ({
  type: 'TURN_ON', board,
})