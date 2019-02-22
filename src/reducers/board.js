import { SET_BOARD } from '../constants/action-types'

const initialState = {
  lettersById: [],
  lettersByHash: {},
}

const boardReducer = (board = initialState, action) => {
  switch (action.type) {
    case SET_BOARD: {
      const boardData = {
        lettersById: action.board.byId,
        lettersByHash: action.board.byHash,
      }
      return boardData
    }
    default:
      return board
  }
}

export default boardReducer