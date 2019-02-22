import { INIT_BOARD } from '../constants/action-types'

const initialState = {
  lettersById: [],
  lettersByHash: {},
}

const boardReducer = (board = initialState, action) => {
  switch (action.type) {
    case INIT_BOARD:
      return action.board

    default:
      return board
  }
}

export default boardReducer