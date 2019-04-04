// TODO: Use reselect on toggles

import { createSelector } from 'reselect'

import {
  SET_BOARD, SET_LETTER,
  TOGGLE_BOARD_ACTIVE, SET_BOARD_INACTIVE,
} from '../constants/action-types'

const initialState = {
  isBoardActive: false,
  tiles: {},
}

const boardReducer = (board = initialState, action) => {
  switch (action.type) {
    case SET_LETTER: {
      return ({
        ...board,
        tiles: {
          ...board.tiles,
          [action.tileId]: {
            letter: board.tiles[action.tileId].letter,
            isTileVisited: true,
          },
        },
      })
    }

    case SET_BOARD_INACTIVE:
      return { ...board, isBoardActive: false }

    case TOGGLE_BOARD_ACTIVE:
      return { ...board, isBoardActive: !board.isBoardActive }

    case SET_BOARD: {
      const boardData = {
        isBoardActive: false,
        tiles: action.board,
      }
      return boardData
    }

    default:
      return board
  }
}

export const tiles = createSelector((state) => state.board.tiles, tiles => tiles)
export const isBoardActive = (state) => state.board.isBoardActive
export const letter = (state, id) => state.board.tiles[id].letter
export const isTileVisited = (state, id) => state.board.tiles[id].isTileVisited

export default boardReducer