import {
  INIT_BOARD,
  SET_BOARD,
  TOGGLE_BOARD_ACTIVE,
  SET_BOARD_INACTIVE,
} from '../constants/action-types'

export const initBoard  = () => ({
  type: INIT_BOARD,
})

export const setBoard = (board) => ({
  type: SET_BOARD, board,
})

export const setBoardInactive = () => ({
  type: SET_BOARD_INACTIVE,
})

export const toggleActive = () => ({
  type: TOGGLE_BOARD_ACTIVE,
})

