import {
  SET_BOARD,
  SET_LETTER_RESET,
  SET_LETTER,
  SET_BOARD_ACTIVE,
  TOGGLE_ACTIVE,
} from '../constants/action-types'

const initialState = {
  isBoardActive: false,
  tiles: {},
}

const boardReducer = (board = initialState, action) => {
  switch (action.type) {
    case SET_LETTER: {
      console.log('Set letter')
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

    case SET_BOARD_ACTIVE:
      return { ...board, isBoardActive: true }

    case TOGGLE_ACTIVE:
      return { ...board, isBoardActive: !board.isBoardActive }

    case 'TURN_ON':// to be deleted
      return action.board

    case SET_LETTER_RESET:
      return action.board

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

export const tiles = (state) => state.board.tiles
export const isBoardActive = (state) => state.board.isBoardActive

export const letter = (state, id) => state.board.tiles[id].letter
export const isTileVisited = (state, id) => state.board.tiles[id].isTileVisited

export default boardReducer