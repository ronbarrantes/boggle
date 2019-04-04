import {
  INIT_BOARD,
  SET_BOARD,
  SET_LETTER_RESET,
  SET_BOARD_ACTIVE,
  TOGGLE_BOARD_ACTIVE,
  SET_BOARD_INACTIVE,
  ACTIVATE_BOARD,
} from '../constants/action-types'

export const initBoard  = () => ({
  type: INIT_BOARD,
})

export const setBoard = (board) => ({
  type: SET_BOARD, board,
})

export const activateBoard = () => ({
  type: ACTIVATE_BOARD,
})

export const setBoardActive = () => ({
  type: SET_BOARD_ACTIVE,
})

export const setBoardInactive = () => ({
  type: SET_BOARD_INACTIVE,
})

export const toggleActive = () => ({
  type: TOGGLE_BOARD_ACTIVE,
})

export const setLetterReset = (board) => ({
  type: SET_LETTER_RESET, board,
})

