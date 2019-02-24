import {
  SET_BOARD,
  SET_LETTER_RESET,
  SET_LETTER_VISITED,
  SET_BOARD_ACTIVE,
} from '../constants/action-types'

const initialState = {
  isActive: false,
  lettersById: [],
  lettersByHash: {},
}

const boardReducer = (board = initialState, action) => {
  switch (action.type) {
    case SET_LETTER_VISITED: {
      return ({
        ...board,
        lettersByHash: {
          ...board.lettersByHash,
          [action.letterId]: {
            letter: board.lettersByHash[action.letterId].letter,
            isVisited: true,
          },
        },
      })
    }

    case SET_BOARD_ACTIVE:
      return { ...board, isActive: !board.isActive }

    case SET_LETTER_RESET:
      console.log(action.board)
      return action.board

    case SET_BOARD: {
      const boardData = {
        isActive: false,
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