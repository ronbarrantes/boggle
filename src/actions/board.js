import { INIT_BOARD, SET_BOARD } from '../constants/action-types'

export const initBoard  = () => ({
  type: INIT_BOARD,
})

export const setBoard = (board) => ({
  type: SET_BOARD, board,
})